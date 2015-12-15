class Track < ActiveRecord::Base
  validates :title, :track_url, :image, :play_count, :user_id, presence: true

  belongs_to :user
end
