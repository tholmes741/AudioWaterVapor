class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      @user = User.find(@follow.follower)
      render :create
    else
      render json: {}
    end
  end

  def destroy
    @follow = Follow.find_by(follower: current_user.id, followee: params[:followee])
    if @follow.destroy
      @user = User.find(@follow.follower)
      render :create
    else
      render json: {}
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:follower, :followee)
  end
end
