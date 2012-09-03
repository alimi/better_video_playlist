describe("BetterVideoPlaylist.Models.Playlist", function() {
  var playlist;

  beforeEach(function(){
    playlist = new BetterVideoPlaylist.Models.Playlist();
  });

  describe("createPlayer", function() {
    beforeEach(function() {
      spyOn(playlist, "createApiPlayer").andReturn("player");
      playlist.createPlayer("playlist_container"); 
    });

    it("should save the YouTube player in the model instance", function(){
      expect(playlist.get("player")).toBeDefined();
    });
  });
});
