BetterVideoPlaylist.Views.PlaylistShow = Backbone.View.extend({
  tagName: "li",

  template: _.template(
    "<div id='<%= id %>'></div>"
  ),

  render: function() {
    this.$el.html(
      this.template({ id: this.childId() })
    );
    return this;
  },

  createPlayer: function() {
    this.model.createPlayer(this.childId());
  },

  childId: function() {
    return this.model.get("name") + "_player";
  }
});
