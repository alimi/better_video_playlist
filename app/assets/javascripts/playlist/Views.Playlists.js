define(function(require){
  var Backbone = require('backbone'),
      _ = require('underscore'),
      Playlist = require('Views.Playlist');

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  return Backbone.View.extend({
    tagName: 'menu',
    className: 'wrapper-right',

    initialize: function() {
      this.$el.html(this.template());
      this.addPlaylists();
    },

    addPlaylists: function() {
      this.collection.each(this.addPlaylist, this);
    },

    addPlaylist: function(model) {
      this.$('ul').append(
        new Playlist({model: model}).render().el
      );
    },

    template: _.template(
      '<ul class="playlists"></ul>'
    )
  });
});
