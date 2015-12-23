/*global cloudinary CLOUDINARY_OPTIONS url*/
var React = require('react');
var ApiUtils = require('../utils/api_utils.js');
var SessionStore = require('../stores/session.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var Upload = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      title: '',
      trackUrl: '',
      image: ''
    };
  },

  componentDidMount: function(){
    if (!SessionStore.currentUser()){
      this.props.history.goBack();
    }
  },

  showImage: function(){
    var img;
    if (this.state.image === '') {
      img = <div></div>;
    } else {
      var source = url + 'w_100,h_100/' + this.state.image;
      img = <img className='track-image' src={source}></img>;
    }
    return img;
  },

  showTrack: function(){
    var track;
    if (this.state.trackUrl === '') {
      track = <div></div>;
    } else {
      track = <div>Uploaded Successful</div>;
    }
    return track;
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var track = {
      title: this.state.title,
      track_url: this.state.trackUrl,
      image: this.state.image,
      user_id: SessionStore.currentUser(),
    };
    if (this.preventBlanks(track)) {
      ApiUtils.createTrack(track, this.moveToProfile);
    }

  },

  preventBlanks: function(track) {
    var blankField = true;
    Object.keys(track).forEach(function(key){
      if (track[key] === '') {
        blankField = false;
      }
    });
    return blankField;
  },

  moveToProfile: function(){
    this.props.history.pushState(null, '/users/' + SessionStore.currentUser());
  },

  image: function(e){
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        results = results[0].url.split('/');
        this.setState({image: results[results.length - 1]});
      }
    }.bind(this));
  },

  trackUrl: function(e){
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        this.setState({trackUrl: results[0].url});
      }
    }.bind(this));
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='track-form'>
          <div className='form-group'>
            <lable>Title</lable>
            <br></br>
            <input
              id='title'
              className='form-control'
              type='text'
              valueLink={this.linkState('title')}/>
          </div>
          <div className='form-group'>
            <lable>Track</lable>
            <br></br>
            {this.showTrack()}
            <button
              onClick={this.trackUrl}
              className='upload-btn'>Upload Track</button>
          </div>
          <div className='form-group'>
            <lable>Image</lable>
            <br></br>
            {this.showImage()}
            <br></br>
            <button
              className='upload-btn'
              onClick={this.image} >Upload Track Image</button>
          </div>
          <input
            type='submit'
            className='btn btn-default'
            value='Upload Track'/>
        </form>
      </div>
    );
  }
});

module.exports = Upload;
