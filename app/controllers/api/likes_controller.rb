class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if @like.save
      @user = User.find_by_track_id(@like.track_id)
      render :create
    else
      render json: {}
    end
  end

  def destroy
    @like = Like.find_by(like_params)
    @like.destroy
    render json: {}
  end

  private
  def like_params
    params.require(:like).permit(:user_id, :track_id)
  end
end
