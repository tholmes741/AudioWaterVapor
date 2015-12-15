json.array! @users do |user|
  next if current_user.username == user.username
  json.username user.username
  json.bio user.bio
  json.avatar user.avatar
end
