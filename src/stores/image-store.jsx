var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash'); //utility library

module.exports = Reflux.createStore({
  listenables: [Actions],

  getImages: function(topicId) {
    Api.get('topics/' + topicId).then(function(json) { //get makes a promise
      this.images = _.reject(json.data, function(image) { //evefr image in json.data, reject any image taht is an album
        return image.is_album; //from imgur
      });
      this.triggerChange();
    }.bind(this)); //promise needs to be bond to this
  },

  getImage: function(id) {
    Api.get('gallery/image/' + id).then(function(json){
      if (this.images){
        this.images.push(json.data);
      } else {
        this.images = [json.data];
      }

      this.triggerChange();
    }.bind(this));
  },

  find: function(id) {
    var image = _.findWhere(this.images, {id: id});

    if (image) {
      return image;
    } else {
      this.getImage(id);
      return null;
    }
  },

  triggerChange: function() {
    this.trigger('change', this.images);
  }
});
