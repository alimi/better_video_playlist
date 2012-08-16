BetterVideoPlaylist.Routers.Playlists = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  index: function(){
    var hot_100 = new BetterVideoPlaylist.Models.Playlist({
      youtube_id: "PLF72A35082E13E2E3",
      name: "hot_100"
    });

    var hip_hop = new BetterVideoPlaylist.Models.Playlist({
      youtube_id: "PLD6A22551384A5E4B",
      name: "hip_hop"
    });

    var country = new BetterVideoPlaylist.Models.Playlist({
      youtube_id: "PL047C9DF6FAA4CA89",
      name: "country"
    });

    var rock = new BetterVideoPlaylist.Models.Playlist({
      youtube_id: "PL1E7107DABE0431B8",
      name: "rock"
    });

    var latin = new BetterVideoPlaylist.Models.Playlist({
      youtube_id: "PLDC89B07333D0A70B",
      name: "latin"
    });

    var dance = new BetterVideoPlaylist.Models.Playlist({
      youtube_id: "PL641DC5B1262CE5A1",
      name: "dance"
    });

    var playlists = new BetterVideoPlaylist.Collections.Playlists(
      [hot_100, hip_hop, country, rock, latin, dance]);
    var view = new BetterVideoPlaylist.Views.PlaylistsIndex(
      { collection: playlists });
    
    view.render();
  }
});
