BetterVideoPlaylist.Views.PlaylistsIndex = Backbone.View.extend({
  el: "#playlist_container",

  render: function(){
    var self = this;
    this.collection.each(function(playlist, index) {
      var playlistShow = 
        new BetterVideoPlaylist.Views.PlaylistShow({ model: playlist });

      self.$el.append(playlistShow.render().$el);
      playlistShow.createPlayer();

      if((index + 1) % 3 == 0) {
        self.$el.append("<br/>");
      }
    });

    return this;
  }
});
