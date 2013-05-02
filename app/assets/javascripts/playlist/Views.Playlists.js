define(function(require){
  var Backbone = require('backbone'),
      Playlist = require('Views.Playlist');

  return Backbone.View.extend({
    tagName: 'ul',

    initialize: function() {
      this.listenTo(this.collection, 'add', this.addPlaylist);
    },

    addPlaylist: function(model) {
      this.$el.append(new Playlist({model: model}).render().el);
    }
  });
});
