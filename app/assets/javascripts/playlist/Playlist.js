define(function(require){
  var PlaylistsView = require('Views.Playlists'),
      PlaylistsCollection = require('Collections.Playlists');

  return function(rootEl) {
    var playlists = new PlaylistsCollection();

    rootEl.html(
      new PlaylistsView({collection: playlists}).render().el
    );

    playlists.fetch();
  }
});
