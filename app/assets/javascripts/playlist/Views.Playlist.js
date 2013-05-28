define(function(require){
  var Backbone = require('backbone'),
      _ = require('underscore');

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  return Backbone.View.extend({
    tagName: 'li',

    events: {
      'click': 'pendingActivation'
    },

    initialize: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.listenTo(this.model, 'change:active', this.render);
    },

    render: function() {
      if(this.model.get('active'))
        this.$('span').show();
      else
        this.$('span').hide();

      return this;
    },

    pendingActivation: function() {
      this.model.set('pending', true);
    },

    template: _.template(
      '{{name}} <span> is now playing</span>'
    )
  });
});
