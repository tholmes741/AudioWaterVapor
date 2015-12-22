class User < ActiveRecord::Base
  validates :username, :session_token, presence: true, uniqueness: true
  validates :email, :avatar, :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  has_many :tracks
  has_many :likes

  after_initialize :ensure_session_token, :ensure_avatar, :ensure_bio, :ensure_cover

  def ensure_cover
    self.cover ||= "gerenic_cover_txh0tf.png"
  end 

  def ensure_bio
    self.bio ||= "I need to make my bio."
  end

  def ensure_avatar
    self.avatar ||= 'avatar_blank_c7korl.png'
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    (user && user.is_password?(password)) ? user : nil
  end

  def self.find_by_track_id(track_id)
    User.find(Track.find(track_id).user_id)
  end

end
