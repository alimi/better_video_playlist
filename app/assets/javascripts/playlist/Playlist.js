define(function(require){
  var PlaylistsView = require('Views.Playlists'),
      PlaylistsCollection = require('Collections.Playlists'),
      Player = require('Views.Player');

  return function(rootEl) {
    var playlists = new PlaylistsCollection();
    playlists.reset($('div#bootstrap').data('playlists'));
    playlists.first().set('active', true);

    rootEl.
      append(new Player({playlists: playlists}).render().el).
      append(new PlaylistsView({collection: playlists}).render().el);
  }
});
