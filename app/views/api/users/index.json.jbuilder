json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.bio user.bio
  json.avatar user.avatar
  json.tracks user.tracks, partial: 'api/tracks/track', as: :track
end
