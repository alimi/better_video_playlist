describe('BetterVideoPlaylist.Collections.Playlist', function() {
  var playlist_a;
  var playlist_b;
  var playlist_c;
  var playlists;

  beforeEach(function(){
    playlist_a = new BetterVideoPlaylist.Models.Playlist();
    playlist_b = new BetterVideoPlaylist.Models.Playlist();
    playlist_c = new BetterVideoPlaylist.Models.Playlist();
    playlists = new BetterVideoPlaylist.Collections.Playlists(
      [playlist_a, playlist_b, playlist_c]);
  });

  describe('activating a playlist', function() {
    beforeEach(function() {
      playlist_a.set('pending', true);
    });

    it('should set playlist_a to active', function(){
      expect(playlist_a.get('active')).toBeTruthy();
    });

    describe('there can only be one active playlist', function() {
      beforeEach(function() {
        playlist_b.set('pending', true);
      });

      it('should set playlist_b to active', function() {
        expect(playlist_b.get('active')).toBeTruthy();
      });

      it('should set playlist_a to inactive', function() {
        expect(playlist_a.get('active')).toBeFalsy();
      });
    });

    describe('reactivating active playlist', function() {
      beforeEach(function() {
        playlist_a.set('pending', true);
      });

      it('should keep playlist_a as active', function(){
        expect(playlist_a.get('active')).toBeTruthy();
      });
    });
  });
});
