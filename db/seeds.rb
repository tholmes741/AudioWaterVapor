# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Track.create(
user_id: 1, title: "testtrack", track_url: 'assets/3am_Apologies.mp3',
image: 'partitura3_f3ognc.jpg'
)

Track.create(
user_id: 2, title: "Aces High", track_url: 'assets/Aces_High.mp3',
image: 'abstract00_v49gg5.jpg'
)

Track.create(
user_id: 1, title: "Latch Remix", track_url: 'assets/Latch_lost_kings.mp3',
image: 'abstract00_v49gg5.jpg'
)

Track.create(
user_id: 2, title: "Tell Me", track_url: 'http://res.cloudinary.com/tholmes741/video/upload/v1450460483/Lyvo_Tell_Me_b0oks9.mp3',
image: 'maxresdefault_gemqb3.jpg'
)

Track.create(
user_id: 1, title: "Can't Feel My Face (Remix)", track_url: 'http://res.cloudinary.com/tholmes741/video/upload/v1450460872/Can_t_Feel_My_Face_squue2.mp3',
image: 'appl1-copy-600x375_l2i5kn.png'
)

Track.create(
user_id: 3, title: 'Gold Dust', track_url: 'assets/Galantis_Gold_Dust.mp3',
image: 'Pharmacy_by_Galantis_tmzjfg.jpg'
)
Track.create(
user_id: 3, title: 'You', track_url: 'http://res.cloudinary.com/tholmes741/video/upload/v1450817628/Galantis_You_fr3eqh.mp3',
image: 'Pharmacy_by_Galantis_tmzjfg.jpg'
)
Track.create(
user_id: 3, title: 'Peanut Butter Jelly', track_url: 'assets/Galantis_Peanut_Butter_Jelly.mp3',
image: 'Pharmacy_by_Galantis_tmzjfg.jpg'
)
Track.create(
user_id: 3, title: 'Firebird', track_url: 'assets/Galantis_Firebird.mp3',
image: 'Pharmacy_by_Galantis_tmzjfg.jpg'
)

User.create(
username: 'Demo User', email: 'example.gmail.com', password: 'password',
avatar: 'calvin-and-hobbes-hd-wallpaper_cjyd6e.jpg',
bio: 'This is where a nice little bio about yourself or your music would go',
cover: 'dziubd87z9mx5nnlqsoo.jpg'
)


User.create(
username: 'Tommy', email: 'example.gmail.com', password: 'password',
avatar: 'me_ang_angelique_p2lemb.jpg',
bio: 'This is my app and I really hope I can make it super pretty. Please enjoy some music!'
)

User.create(
username: "Galantis", email: 'galantis@gmail.com', password: 'secret',
avatar: 'galantis_14_f3zpwq.jpg',
bio: 'Yo we are GALANTIS. We made some super sweet beats so make sure that you check them out and throw them a like.',
cover: 'galantis-peanut-butter-and-jelly_ld7may.jpg'
)
