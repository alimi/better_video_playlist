BetterVideoPlaylist.Models.Playlist = Backbone.Model.extend({
  createPlayer: function(containing_element) {
    this.set(
      "player", this.createApiPlayer(containing_element)
    );
  },

  createApiPlayer: function(containing_element) {
    var self = this;

    return new YT.Player(containing_element, {
      height: '200',
      width: '200', 
      playerVars: {
        'listType': 'playlist',
        'list': this.escape("youtube_id")
      },
      events: {
        'onStateChange': self.playerStateChanged
      }
    });
  },

  playerStateChanged: function(event) {
    if(event.data == YT.PlayerState.PLAYING) {
      event.target.setSize(640, 360);
    }
  }
});
