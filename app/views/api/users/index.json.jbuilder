json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.bio user.bio
  json.avatar user.avatar
  json.tracks user.tracks
end
