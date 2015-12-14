# Phase 4: Comments and Likes (1 day)

## Rails
### Models
* Likes
* Comments

### Controllers
Api::LikesController(:create, :destroy, :index)
Api::CommentsController(:create, :destroy, :index)

### Views
* comments/index.json.jbuilder
* likes/index.json.jbuilder

## Flux
### Views (React Components)
* Comment List
   - Comment
 * Liked Tracks
  - tracks

### Stores
* Comments

### Actions
* receiveAllComments

### ApiUtil
* fetchAllComments
* createComment
* destroyComment
* createLike
* destroyLike

## Gems/Libraries
