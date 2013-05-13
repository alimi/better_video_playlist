define(function(require){
  var Backbone = require('backbone'),
      _ = require('underscore'),
      YoutubePlayer = require('Youtube.Player');

  return new(Backbone.View.extend({
    className: 'wrapper player-container',

    initialize: function() {
      this.$el.html(this.template());
      this.youtubePlayer = new YoutubePlayer("player");
    },

    update: function(youtubeId) {
      this.youtubePlayer.action('loadPlaylist', {list: youtubeId});
    },

    template: _.template(
      '<iframe id="player" src="http://www.youtube.com/embed/enablejsapi=1">' +
      '</iframe>'
    )
  }));
});
