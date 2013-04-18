define(function(require){
  var Backbone = require('backbone'),
      Playlist = require('Models.Playlist');

  return Backbone.Collection.extend({
    model: Playlist,
    url: '/playlists'
  });
});
