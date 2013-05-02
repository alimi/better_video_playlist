define(function(require){
  var PlaylistsView = require('Views.Playlists'),
      PlaylistsCollection = require('Collections.Playlists'),
      Player = require('Views.Player');

  return function(rootEl) {
    var playlists = new PlaylistsCollection();

    rootEl.
      append(new PlaylistsView({collection: playlists}).render().el).
      append(Player.render().el);

    playlists.fetch();
  }
});
