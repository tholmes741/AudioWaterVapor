json.id track.id
json.title track.title
json.trackUrl track.track_url
json.image track.image
if current_user
  json.liked track.has_been_liked?(current_user.id)
else
  json.liked false
end
json.likeCount track.likes.count
json.likes track.likes, partial: 'api/likes/like', as: :like
json.user do
  json.id track.user.id
  json.username track.user.username
  json.avatar track.user.avatar
end
