BetterVideoPlaylist.Views.PlaylistsIndex = Backbone.View.extend({
  el: "#playlist_container",

  initialize: function() {
    this.collection.on("playlist:active", this.update, this);
  },

  render: function() {
    var self = this;

    _.each(this.collection.models, function(playlist, index) { 
      var playlistShow = 
        new BetterVideoPlaylist.Views.PlaylistShow({ model: playlist });

      self.$el.append(playlistShow.render().$el);
      playlistShow.createPlayer();
    });

    return this;
  },

  update: function(player_iframe) {
    this.$("#playlist_player").append(player_iframe);
  }
});
