class Like < ActiveRecord::Base
  validates :user_id, :track_id, presence: true
  validates :user_id, uniqueness: {scope: :track_id,
    message: "user can only like a track once" }

  belongs_to :track
  belongs_to :user
end
