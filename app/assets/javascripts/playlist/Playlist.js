define(function(require){
  var PlaylistsView = require('Views.Playlists'),
      PlaylistsCollection = require('Collections.Playlists'),
      Player = require('Views.Player');

  return function(rootEl) {
    var playlists = new PlaylistsCollection();
    playlists.reset($('div#bootstrap').data('playlists'));

    Player.updatePlaylist(playlists.first().escape('youtube_id'));

    rootEl.
      append(Player.render().el).
      append(new PlaylistsView({collection: playlists}).render().el);
  }
});
