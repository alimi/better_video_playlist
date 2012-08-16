window.BetterVideoPlaylist = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},
  initialize: function() {
    new BetterVideoPlaylist.Routers.Playlists();
    Backbone.history.start();
  }
};
