var React = require('react');
var ImageStore = require('../stores/image-store');
var Actions = require('../actions');
var Reflux = require('reflux');
var ImagePreview = require('./image-preview');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],

  getInitialState: function() {
    return {
      images: []
    };
  },

  componentWillMount: function() { //singular render to DOM
    Actions.getImages(this.props.params.id);
  },

  componentWillReceiveProps: function(nextProps) { //this is for re-rendering new props
    Actions.getImages(nextProps.params.id);
  },

  render: function() {
    return <div className="topic">
      {this.renderImages()}
    </div>
  },

  renderImages: function() {
    return this.state.images.slice(0, 20).map(function(image) {
      return <ImagePreview key={image.id} {...image} /> //spread iamge across the component
    });
  },

  onChange: function(event, images) {
    this.setState({images: images})
  }
});
