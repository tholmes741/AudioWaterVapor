class Api::SearchesController < ApplicationController

  def show
    search = params[:search]
    @users = User.where('username ILIKE ?', "%#{search}%")
    @tracks = Track.where('title ILIKE ?', "%#{search}%")

    render :show
  end
end
