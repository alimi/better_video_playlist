define(function(require){
  var Backbone = require('backbone'),
      Player = require('Views.Player');

  return Backbone.View.extend({
    tagName: 'li',

    events: {
      'click': 'loadPlaylist'
    },

    initialize: function() {
      this.$el.append(this.model.escape('name'));
    },

    loadPlaylist: function() {
      Player.update(this.model.escape('youtube_id'));
    }
  });
});
