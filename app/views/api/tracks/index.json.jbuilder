json.array! @tracks do |track|
  json.title track.title
  json.track_url track.track_url
  json.image track.image
  json.user do
    json.id track.user.id
    json.username track.user.username
    json.avatar track.user.avatar
  end
end
