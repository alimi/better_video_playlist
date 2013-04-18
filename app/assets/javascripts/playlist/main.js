require.config({
  shim: {
    'underscore': {
      'exports': '_'
    },
    'jquery': {
      'exports': '$'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
  },
  paths: {
    'jquery': 'jquery-1.9.1.min'
  }
});

define(['Playlist'], function(Playlist){
  new Playlist($('#playlist'));
  return {};
});
