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
    this.$('iframe').animate({width: '0px', height: '0px'}, 'slow');
    this.$el.parent().prepend(this.$el);
    this.$el.addClass('active');
    this.$('iframe').animate({width: '853px', height: '480px'}, 'slow');
  },

  demotePlayer: function() {
    this.model.get('player').stopVideo();
    this.$el.removeClass('active');
    this.$('iframe').animate({width: '200px', height: '200px'}, 'slow');
  },

  playVideo: function() {
    if(this.model.get('active')) {
      this.model.get('player').playVideo();
    }
  }
});
