class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      redirect_to :root
    else
      flash.now[:errors] = ["Invalid username/passwor"]
      render :new
    end
  end

  def new

  end

  def destroy
    sign_out
  end
end
