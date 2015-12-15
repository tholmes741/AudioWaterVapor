class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      username: params[:user][:username],
      password: params[:user][:password]
    )

    if user
      sign_in(@user)
      render json: @user
    else
      flash.now[:errors] = ["Invalid username/passwor"]
    end
  end

  def destroy
    sign_out
  end
end
