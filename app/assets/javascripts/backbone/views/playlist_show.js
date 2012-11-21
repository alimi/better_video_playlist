BetterVideoPlaylist.Views.PlaylistShow = Backbone.View.extend({
  tagName: "li",

  template: _.template(
    "<div id='<%= id %>'></div>"
  ),

  initialize: function() {
    this.model.on("change:active", this.updatePlayer, this);
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

  updatePlayer: function() {
    if(this.model.get('active')) {
      this.promotePlayer();
    }
    else {
      this.demotePlayer();
    }
  },

  promotePlayer: function() {
    this.$el.parent().prepend(this.$el);
    this.$(this.$('iframe')).animate({width: '853px', height: '480px'});
  },

  demotePlayer: function() {
    this.model.get('player').stopVideo();
    this.$(this.$('iframe')).animate({width: '200px', height: '200px'});
  },

  playVideo: function() {
    if(this.model.get('active')) {
      this.model.get('player').playVideo();
    }
  }
});
