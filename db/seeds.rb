# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Track.create(
user_id: 1, title: "testtrack", track_url: 'assets/Fix_You-Yara.m4a',
image: 'http://dpshots.com/images/mist_photography/water-mist.jpg'
)

Track.create(
user_id: 1, title: "Aces High", track_url: 'assets/Aces_High.mp3',
image: 'http://www.aceoftennessee.com/CutoutAceSpade.gif'
)

Track.create(
user_id: 1, title: "Latch Remix", track_url: 'assets/Latch_lost_kings.mp3',
)

Track.create(
user_id: 1, title: "Tell Me", track_url: 'http://res.cloudinary.com/tholmes741/video/upload/v1450460483/Lyvo_Tell_Me_b0oks9.mp3',
)

Track.create(
user_id: 1, title: "Can't Feel My Face (Remix)", track_url: 'http://res.cloudinary.com/tholmes741/video/upload/v1450460872/Can_t_Feel_My_Face_squue2.mp3',
)


User.create(
username: 'tommy', email: 'example.gmail.com', password: 'password',
avatar: 'me_ang_angelique_p2lemb.jpg',
bio: 'This is my app and I really hope I can make it super pretty. Please enjoy some music!'
)
