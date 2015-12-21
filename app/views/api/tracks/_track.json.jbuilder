json.id track.id
json.title track.title
json.trackUrl track.track_url
json.image track.image
json.likes track.likes.count
json.user do
  json.id track.user.id
  json.username track.user.username
  json.avatar track.user.avatar
end
