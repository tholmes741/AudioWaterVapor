class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render json: @user
    else
      flash.now[:errors] = @user.erros.full_messages
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :avatar, :email)
  end
end
