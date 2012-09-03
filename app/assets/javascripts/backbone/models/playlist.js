BetterVideoPlaylist.Models.Playlist = Backbone.Model.extend({
  createPlayer: function(containing_element) {
    this.set(
      "player", this.createApiPlayer(containing_element)
    );
  },

  createApiPlayer: function(containing_element) {
    return new YT.Player(containing_element, {
      height: '200',
      width: '200', 
      playerVars: {
        'listType': 'playlist',
        'list': this.escape("youtube_id")
      }
    });
  }
});
