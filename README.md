# AudioWaterVapor


live: www.audiowatervapor.xyx

## Minimum Viable Product

AudioWaterVapor is a web application inspired by SoundCloud built using Ruby on Rails
and React.js. AudioWaterVapor allows users to listen to tracks no matter what
they are doing on the site. This is possible because it will be a Single-Page Application.
Users will be able to follow other users for easy access to their music along with liking
tracks. The search bar will allow for users to search for artists or tracks and will
show results for any partial matches. Users will also be able to edit their profile pictures,
cover photos, and bios to customize their page. You will also be able to share your music with
everyone else on the site through upload.
<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [X] Create an account
- [X] Log in / Log out
- [X] Listen to uploaded audio files (while staying on site)
- [X] Upload audio files
- [X] Search through users/artists
- [X] Like tracks by other users
- [ ] Comment on tracks
- [X] Follow other users


## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Track Model and JSON API (1 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). This is going to be a single page application so that a non user can
listen to a track and sign-up in the mean time. Before building out the
front end, I will begin by setting up a full JSON API for Tracks and Users.

[Details][phase-one]

### Phase 2: Flux Architecture and Navbar (1.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, the navbar and it functionality will be focused on

[Details][phase-two]

### Phase 3: Tracks (1.5 days)

Phase 3 will focus on all of the functionality of tracks. The index, show, and
upload form will all be handled in this phase.
[Details][phase-three]

### Phase 4: Comments and Likes (1 day)

In Phase 4 comments and and likes will be created and interacted with. Comments
will be children of Tracks and likes will help the users 'save' that track for
later enjoyment. Api will need to be established for both of these features.

[Details][phase-four]

### Phase 5: Following (1 day)

Phase 5 introduces a new feature. Users will be able to 'save' users/artists
they like by following them. Then the user will be able to go to their following
page and browse through all of the users/artists they follow.

[Details][phase-five]

### Phase 6: Playbar (1 day)

The playbar functionality is crucial to the idea of the app. When you play a song, you can listen to it as you do anything on this site and this playbar is going to be how you interact with the track. Styling the playbar will be done at this point.

[Details][phase-six]

### Phase 7: Styling Cleanup and Seeding (1 Days)

Phase 6 will be all about making the app look great, sleek, and professional.

[Details][phase-seven]

### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Making Playlists
- [ ] Tagging Tracks
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md
# AudioWaterVapor
