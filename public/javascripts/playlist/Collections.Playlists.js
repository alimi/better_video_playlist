define(function(require){
  var Backbone = require('backbone'),
      Playlist = require('Models.Playlist');

  return Backbone.Collection.extend({
    model: Playlist,
    url: '/playlists',

    initialize: function() {
      this.on('change:pending', this.updateActivePlaylist, this);
    },

    updateActivePlaylist: function(pendingPlaylist) {
      if(this.activePlaylist())
        this.activePlaylist().unset('active');

      pendingPlaylist.unset('pending');
      pendingPlaylist.set('active', true);
    },

    activePlaylist: function() {
      return this.findWhere({active: true});
    }
  });
});
