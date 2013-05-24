define(function(require){
  var Backbone = require('backbone'),
      _ = require('underscore'),
      YoutubePlayer = require('Youtube.Player');

  return new(Backbone.View.extend({
    className: 'wrapper-left',

    initialize: function() {
      this.$el.html(this.template());
      this.youtubePlayer = new YoutubePlayer("player");
      this.hasInitialPlaylist = false;
    },

    updatePlaylist: function(youtubeId) {
      if(this.hasInitialPlaylist)
        this.youtubePlayer.action('loadPlaylist', {list: youtubeId});
      else
        this._setInitialPlaylist(youtubeId);
    },

    _setInitialPlaylist: function(youtubeId) {
      this.$('iframe').attr('src', function(index, value) {
        return value + '&listType=playlist&list=' + youtubeId;
      });

      this.hasInitialPlaylist = true;
    },

    template: _.template(
      '<div class="player-container">' +
        '<iframe id="player" ' +
          'src="http://www.youtube.com/embed/?enablejsapi=1">' +
        '</iframe>' +
      '</div>'
    )
  }));
});
