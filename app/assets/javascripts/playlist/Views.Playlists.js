define(function(require){
  var Backbone = require('backbone'),
      Playlist = require('Views.Playlist');

  return Backbone.View.extend({
    tagName: 'menu',
    className: 'wrapper',

    initialize: function() {
      this.$el.html('<ul></ul>');
      this.listenTo(this.collection, 'add', this.addPlaylist);
    },

    addPlaylist: function(model) {
      this.$('ul').append(new Playlist({model: model}).render().el);
    }
  });
});
