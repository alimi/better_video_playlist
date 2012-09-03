BetterVideoPlaylist.Views.PlaylistShow = Backbone.View.extend({
  render: function() {
    return this;
  },

  createPlayer: function() {
    this.model.createPlayer(this.el);
  }
});
