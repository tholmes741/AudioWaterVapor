class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render :create
    else
      render json: { errors: ["Invalid username/passwor"] }
    end
  end


  def destroy
    sign_out
    render json: {}
  end
end
