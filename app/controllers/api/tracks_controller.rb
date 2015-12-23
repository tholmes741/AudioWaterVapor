class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render :index
  end

  def show
    @track = Track.find(params[:id])
    render json: @track
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      @user = User.find(@track.user_id)
      render :create
    else
      render json: {}
    end
  end

  private
  def track_params
    params.require(:track).permit(:title, :user_id, :track_url, :image)
  end
end
