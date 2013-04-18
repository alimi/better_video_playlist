define(function(require){
  var Backbone = require('backbone');

  return Backbone.View.extend({
    initialize: function() {
      this.listenTo(this.collection, 'add', this.addPlaylist);
    },

    render: function() {
      return this;
    },

    addPlaylist: function(model) {
      this.$el.append('<li>' + model.get('name') + '</li>');
    }
  });
});
