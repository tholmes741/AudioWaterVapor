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

User.create(
username: 'tommy', email: 'example.gmail.com', password: 'password',
avatar: 'http://hellogiggles.com/wp-content/uploads/2014/06/10/Calvin-and-Hobbes-hugging-calvin-and-hobbes-1395524-1024-768.jpg'
)
