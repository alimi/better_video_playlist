define(function(require){
  var Backbone = require('backbone'),
      _ = require('underscore'),
      YoutubePlayer = require('Youtube.Player');

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  return Backbone.View.extend({
    className: 'wrapper-left',

    initialize: function(options) {
      this.playlists = options.playlists;
      this.youtubePlayer = new YoutubePlayer("player");

      this.$el.html(this.template({
        initialPlaylist: this.playlists.activePlaylist().get('youtube_id')
      }));

      this.listenTo(this.playlists, 'change:active', this.loadPlaylist);
    },

    loadPlaylist: function(playlist) {
      if(playlist.get('active'))
        this.youtubePlayer.action(
          'loadPlaylist', { list: playlist.get('youtube_id') }
        );
    },

    template: _.template(
      '<div class="player-container">' +
        '<iframe id="player" src="' +
          'http://www.youtube.com/embed/?' +
            'enablejsapi=1&' +
            'listType=playlist&' +
            'list={{initialPlaylist}}' +
        '">' +
        '</iframe>' +
      '</div>'
    )
  });
});
