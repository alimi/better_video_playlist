BetterVideoPlaylist.Views.PlaylistShow = Backbone.View.extend({
  render: function() {
    var iframe = this.make("iframe",
      {
	"id": this.model.escape("name"),
        "type": "text/html",
	"width": "200",
	"height": "200",
	"src": this.model.youtube_url(),
	"frameborder": "0",
	"allowfullscreen": ""
      });
    this.$el = iframe
    return this;
  }
});
