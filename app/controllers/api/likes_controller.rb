class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if @like.save
      render json: @like
    else
      render json: {}
    end
  end

  def destroy
    @like = Like.find_by(like_params)
    @like.destroy
    render json: @like
  end

  private
  def like_params
    params.require(:like).permit(:user_id, :track_id)
  end
end
