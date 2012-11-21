BetterVideoPlaylist.Collections.Playlists = Backbone.Collection.extend({
  model: BetterVideoPlaylist.Models.Playlist,

  initialize: function() {
    this.on('change:pending', this.activatePlaylist, this);
  },

  activatePlaylist: function() {
    var pending = this.find(function(playlist) {
      return playlist.get('pending');
    });

    var active = this.find(function(playlist) {
      return playlist.get('active');
    });

    if(pending !== undefined) {
      if(active !== undefined) {
        if(pending === active) {
          active.set('pending', false);
          return;
        }

        active.set('active', false);
      }

      pending.set('active', true);
      pending.set('pending', false);
    }
  }
});
