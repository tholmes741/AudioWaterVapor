class Track < ActiveRecord::Base
  validates :title, :track_url, :image, :play_count, :user_id, presence: true

  before_validation :ensure_image

  def ensure_image
    self.image ||= 'http://www.amusement.net/wp-content/uploads/2013/05/oscillate2.jpg'
  end

  belongs_to :user
end
