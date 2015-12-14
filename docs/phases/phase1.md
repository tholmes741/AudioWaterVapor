# Phase 1: User Authentication, Track Model and JSON API

## Rails
### Models
* User
* Track

### Controllers
* Api::SessionsController (create, destroy)
* Api::UsersController (create, index, show, update)

### Views
* users/index.json.builder
* users/show.json.builder


## Flux
### Views (React Components)
* New User
* New Session

### Stores
* Users

### Actions
* receiveAllUsers
* receiveUser



### ApiUtil
* fetchAllUsers
* fetchUser
* createUser
* fetchAllTracks
* fetchTrack

## Gems/Libraries
* BCrypt (Gem)
