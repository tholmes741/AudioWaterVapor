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
  end

  private
  def follow_params
    params.require(:follow).permit(:follower, :followee)
  end
end
