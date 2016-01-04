# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


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
user_id: 3, title: 'Gold Dust', track_url: 'http://res.cloudinary.com/tholmes741/video/upload/v1450817633/Galantis_Gold_Dust_zauaru.mp3',
image: 'Pharmacy_by_Galantis_tmzjfg.jpg'
)
Track.create(
user_id: 3, title: 'You', track_url: 'http://res.cloudinary.com/tholmes741/video/upload/v1450817628/Galantis_You_fr3eqh.mp3',
image: 'Pharmacy_by_Galantis_tmzjfg.jpg'
)
Track.create(
user_id: 3, title: 'Peanut Butter Jelly', track_url: 'http://res.cloudinary.com/tholmes741/video/upload/v1450817634/Galantis_Peanut_Butter_Jelly_pyzpmt.mp3',
image: 'Pharmacy_by_Galantis_tmzjfg.jpg'
)
Track.create(
user_id: 3, title: 'Firebird', track_url: 'http://res.cloudinary.com/tholmes741/video/upload/v1450817630/Galantis_Firebird_naivkm.mp3',
image: 'Pharmacy_by_Galantis_tmzjfg.jpg'
)

Track.create(
user_id: 4, title: 'The Funeral', track_url: 'http://res.cloudinary.com/tholmes741/video/upload/v1451888408/Band_Of_Horses_-_The_Funeral_2006_fsnnb4.mp3',
image: 'boh_album_yavtub.jpg',
play_count: 231
)

Track.create(
user_id: 4, title: "No One's Gonna Love You", track_url: 'http://res.cloudinary.com/tholmes741/video/upload/v1451888408/Band_Of_Horses_-_No_One_s_Gonna_Love_You_lyrics_pzorge.mp3',
image: 'boh_album_yavtub.jpg',
play_count: 134
)

Track.create(
user_id: 4, title: 'Evening Kitches', track_url: 'http://res.cloudinary.com/tholmes741/video/upload/v1451888408/Band_of_Horses_-_Evening_Kitchen_lyrics_wfzisw.mp3',
image: 'boh_album_yavtub.jpg',
play_count: 92
)

Track.create(
user_id: 4, title: 'Is There A Ghost', track_url: 'http://res.cloudinary.com/tholmes741/video/upload/v1451888408/Is_There_A_Ghost_-_Band_Of_Horses_With_Lyrics_mwmpux.mp3',
image: 'boh_album_yavtub.jpg',
play_count: 129
)



User.create(
username: 'Demo User', email: 'example.gmail.com', password: 'password',
avatar: 'calvin-and-hobbes-hd-wallpaper_cjyd6e.jpg',
bio: 'This is where a nice little bio about yourself or your music would go',
cover: 'dziubd87z9mx5nnlqsoo.jpg'
)


User.create(
username: 'Tommy', email: 'example.gmail.com', password: 'secretpassword',
avatar: 'me_ang_angelique_p2lemb.jpg',
bio: 'This is my first fullstack app so please come and poke around. Enjoy!'
)

User.create(
username: 'Avicii', email: 'example.gmail.com', password: 'secretpassword',
avatar: 'Avicii_evm7yh.jpg',
bio: "My name is Tim Bergling, better known by my stage name Avicii. I'm is a Swedish electronic musician, DJ, remixer and record producer."
)

User.create(
username: 'Band of Horses', email: 'example.gmail.com', password: 'secretpassword',
avatar: 'bandofhorses_xn9ltj.jpg',
cover: 'bandofhorses_cover_lscypq.jpg',
bio: "Band of Horses, originally known briefly as Horses, is an American rock band formed in 2004 in Seattle by Ben Bridwell. Our band has released four studio albums, the most successful of which is 2010's Grammy-nominated Infinite Arms."
)

User.create(
username: 'MisterWives', email: 'example.gmail.com', password: 'secretpassword',
avatar: 'misterwives_h4hcta.jpg',
bio: 'We are an American indie pop band based in New York City, consisting of lead singer Mandy Lee, percussionist Etienne Bowler, bass guitarist William Hehir, guitarist Marc Campbell, multi-instrumentalist Jesse Blum, and saxophonist Mike Murphy.'
)


User.create(
username: 'Calvin Harris', email: 'example.gmail.com', password: 'secretpassword',
avatar: 'calvin_harris_efryqs.jpg',
bio: 'Hi! My name is Adam Richard Wiles, better known by his stage name Calvin Harris. I am a Scottish DJ, singer-songwriter, record producer, recording artist and remixer.'
)

User.create(
username: "Galantis", email: 'galantis@gmail.com', password: 'secretpassword',
avatar: 'galantis_14_f3zpwq.jpg',
bio: 'Yo we are GALANTIS. We made some super sweet beats so make sure that you check them out and throw them a like.',
cover: 'galantis-peanut-butter-and-jelly_ld7may.jpg'
)
