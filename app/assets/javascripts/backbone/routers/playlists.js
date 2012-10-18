BetterVideoPlaylist.Routers.Playlists = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function(){
    var hot_100 = new BetterVideoPlaylist.Models.Playlist({
      youtube_id: "PLm3KPZEPAGDejNtgs2rVjFprZig6xPAd-",
      name: "hot_100"
    });

    var hip_hop = new BetterVideoPlaylist.Models.Playlist({
      youtube_id: "PLm3KPZEPAGDflOwHQ-lfyCf4uOIAKE6Q0",
      name: "hip_hop"
    });

    var country = new BetterVideoPlaylist.Models.Playlist({
      youtube_id: "PLm3KPZEPAGDfhbWbPiAfhPac4mIasxo3M",
      name: "country"
    });

    var rock = new BetterVideoPlaylist.Models.Playlist({
      youtube_id: "PLm3KPZEPAGDcC8QOzyy6HCsZ8jhdsKshV",
      name: "rock"
    });

    var latin = new BetterVideoPlaylist.Models.Playlist({
      youtube_id: "PLm3KPZEPAGDdxoLWZ-yO8YXMaWsRB6L5z",
      name: "latin"
    });

    var dance = new BetterVideoPlaylist.Models.Playlist({
      youtube_id: "PLm3KPZEPAGDfazqF27t4Yo0Lk9aSMJcID",
      name: "dance"
    });

    var playlists = new BetterVideoPlaylist.Collections.Playlists(
      [hot_100, hip_hop, country, rock, latin, dance]);
    var view = new BetterVideoPlaylist.Views.PlaylistsIndex(
      { collection: playlists });

    view.render();
  }
});
