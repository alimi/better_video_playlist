BetterVideoPlaylist.Models.Playlist = Backbone.Model.extend({
  createPlayer: function(containing_element) {
    this.set(
      "player", this.createApiPlayer(containing_element)
    );
    this.setPlayerBindings();
  },

  createApiPlayer: function(containing_element) {
    var self = this;

    var apiPlayer =  new YT.Player(containing_element, {
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

    _.extend(apiPlayer, Backbone.Events);

    return apiPlayer;
  },

  setPlayerBindings: function() {
    this.get("player").on("player:playing", function() {
      this.trigger("playlist:active");
    }, this);
  },

  playerStateChanged: function(event) {
    if(event.data == YT.PlayerState.PLAYING) {
      event.target.trigger("player:playing");
    }
  }
});
