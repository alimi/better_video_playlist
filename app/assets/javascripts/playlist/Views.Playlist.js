define(function(require){
  var Backbone = require('backbone'),
      _ = require('underscore'),
      Player = require('Views.Player');

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  return Backbone.View.extend({
    tagName: 'li',

    events: {
      'click': 'loadPlaylist'
    },

    initialize: function() {
      this.$el.html(this.template(this.model.toJSON()));
    },

    loadPlaylist: function() {
      Player.update(this.model.escape('youtube_id'));
      return false;
    },

    template: _.template(
      '{{name}}'
    )
  });
});
