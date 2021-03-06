class Track < ActiveRecord::Base
  validates :title, :track_url, :image, :play_count, :user_id, presence: true

  before_validation :ensure_image

  def ensure_image
    self.image ||= 'http://www.amusement.net/wp-content/uploads/2013/05/oscillate2.jpg'
  end

  belongs_to :user
  has_many :likes

  def has_been_liked?(user_id)
    self.likes.any? {|like| like.user_id == user_id }
  end 
end
