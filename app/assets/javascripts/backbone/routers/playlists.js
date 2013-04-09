BetterVideoPlaylist.Routers.Playlists = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function(){
    var playlists = new BetterVideoPlaylist.Collections.Playlists();

    var view = new BetterVideoPlaylist.Views.PlaylistsIndex(
      { collection: playlists });

    playlists.fetch();
    view.render();
  }
});
