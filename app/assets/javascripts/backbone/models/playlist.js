BetterVideoPlaylist.Models.Playlist = Backbone.Model.extend({
  youtube_url: function() {
    return "https://www.youtube.com/embed/?listType=playlist&list=" +
      this.escape("youtube_id");
  }
});
