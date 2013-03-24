require 'google/api_client'

module Youtube
  class Playlist
    def initialize(client, title)
      @client = client
      @title = title
    end

    def to_json
      JSON(
        {
          :snippet => {:title => @title},
          :status => {:privacyStatus => 'public'}
        }
      )
    end

    def create
      result = @client.playlist_action(self)
      @youtube_id = result.data.id
    end

    def populate_with_songs(songs)
      create if @youtube_id.blank?

      songs.each do |song|
        youtube_song = Youtube::Song.new(@client, @youtube_id)
        youtube_song.set_video_from_query(song)
        result = @client.playlist_item_action(youtube_song)
        if result.data.id
          puts "Yay! Song '#{song}' added to #{@title}:#{@youtube_id} as #{result.data.id}"
        else
          puts "Boo! Song '#{song}' not added to #{@title}:#{@youtube_id}."
          puts result.data.error.inspect
        end
      end

      @youtube_id
    end
  end
end
