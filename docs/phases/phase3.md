# Phase 3: Tracks (1.5 days)

## Rails
### Models


### Controllers
* Api::TracksController (create, destroy, index, show, update)

### Views
* tracks/index.json.jbuilder
* tracks/show.json.jbuilder

## Flux
### Views (React Components)
* Track Index
* Track Show

### Stores
* Tracks

### Actions
* ApiActions.receiveAllTracks -> triggered by ApiUtil
* ApiActions.receiveSingleTrack
* ApiActions.deleteTrack
* UserActions.fetchAllTracks -> triggers ApiUtil

### ApiUtil
* ApiUtil.fetchAllTracks
* ApiUtil.fetchSingleTrack
* ApiUtil.createTrack
* ApiUtil.editTrack
* ApiUtil.destroyTrack

## Gems/Libraries
