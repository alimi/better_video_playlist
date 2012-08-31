BetterVideoPlaylist.Views.PlaylistShow = Backbone.View.extend({
  render: function() {
    return this;
  },

  createPlayer: function() {
    new YT.Player(this.el, {
      height: '200',
      width: '200', 
      playerVars: {
        'listType': 'playlist',
    	'list': this.model.escape("youtube_id") 
      }
    });
  }
});
