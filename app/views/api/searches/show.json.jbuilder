json.users do
  json.array! @users do |user|
    json.id user.id
    json.username user.username
    json.avatar user.avatar
  end
end

json.tracks do
  json.array! @tracks do |track|
    json.id track.id
    json.title track.title
    json.image track.image
    json.userId track.user_id
    json.playCount track.play_count
    json.likes track.likes.count
  end
end
