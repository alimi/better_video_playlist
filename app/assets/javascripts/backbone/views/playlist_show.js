BetterVideoPlaylist.Views.PlaylistShow = Backbone.View.extend({
  tagName: "li",

  template: _.template(
    "<div id='<%= id %>'></div>"
  ),

  initialize: function() {
    this.model.on("change:active", this.promotePlayer, this);
    this.model.on("playlist:ready", this.playVideo, this);
  },

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
  },

  promotePlayer: function() {
    this.$el.parent().prepend(this.$el);
    this.$(this.$('iframe')).animate({width: '853px', height: '480px'});
  },

  playVideo: function() {
    if(this.model.get("active")) {
      this.model.get("player").playVideo();
    }
  }
});
