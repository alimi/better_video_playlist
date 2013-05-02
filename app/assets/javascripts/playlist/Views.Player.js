define(function(require){
  var Backbone = require('backbone'),
      YoutubePlayer = require('Youtube.Player');

  return new(Backbone.View.extend({
    tagName: 'iframe',
    id: 'player',

    initialize: function() {
      this.$el.attr('src', 'http://www.youtube.com/embed/enablejsapi=1');
      this.youtubePlayer = new YoutubePlayer(this.id);
    },

    update: function(youtubeId) {
      this.youtubePlayer.action('loadPlaylist', {list: youtubeId});
    }
  }));
});
