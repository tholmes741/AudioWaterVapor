class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render :create
    else
      render json: @user.errors.full_messages
    end
  end

private
  def user_params
    params.require(:user).permit(:username, :password, :avatar, :email)
  end
end
