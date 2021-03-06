class UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      redirect_to :root
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def new
    @user = User.new
    render :new
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: {}
    end 
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :avatar, :email, :cover, :bio)
  end
end
