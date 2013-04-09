BetterVideoPlaylist.Views.PlaylistsIndex = Backbone.View.extend({
  el: "#playlist_container",

  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    var self = this;

    this.collection.each(function(playlist) {
      var playlistShow = 
        new BetterVideoPlaylist.Views.PlaylistShow({ model: playlist });

      self.$el.append(playlistShow.render().$el);
      playlistShow.createPlayer();
    });

    return this;
  }
});
