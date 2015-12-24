json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.email user.email
  json.bio user.bio
  json.avatar user.avatar
  json.cover user.cover
  json.tracks user.tracks, partial: 'api/tracks/track', as: :track
  json.follows user.follows, partial: 'api/follows/follow', as: :follow
end
