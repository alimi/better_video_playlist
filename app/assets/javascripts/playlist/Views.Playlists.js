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
      this.listenTo(this.collection, 'add', this.addPlaylist);
    },

    addPlaylist: function(model) {
      this.$('ul').append(
        new Playlist({model: model, parentView: this}).render().el
      );
    },

    template: _.template(
      '<ul>' +
        '<li>Playlists</li>' +
      '</ul>'
    )
  });
});
