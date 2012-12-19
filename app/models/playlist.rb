class Playlist < ActiveRecord::Base
  attr_accessible :name
  
  def set_youtube_id
    if billboard_playlist?
      youtube_id = youtube_api.
        create_playlist_with_songs(
          Billboard.songs_for_chart(self.name)
        )
    end
  end

  def billboard_playlist?
    Playlist.billboard_playlists.include? self.name
  end

  def self.billboard_playlists
    %w(
      hot_100
      hip_hop
      country
      rock
      latin
      dance
    )
  end

  private

    def youtube_api
      @youtube_api ||= YoutubeApi.new
    end
end
