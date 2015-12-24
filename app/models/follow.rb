class Follow < ActiveRecord::Base
  validates :follower, :followee, presence: true

  belongs_to :user,
    foreign_key: :follower,
    primary_key: :id,
    class_name: 'User'

end
