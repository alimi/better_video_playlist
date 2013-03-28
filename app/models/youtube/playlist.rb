require 'google/api_client'

module Youtube
  class Playlist
    attr_accessor :youtube_id

    def initialize(client, title, youtube_id=nil)
      @client = client
      @title = title
      @youtube_id = youtube_id
    end

    def to_json
      JSON(
        {
          :snippet => {:title => @title},
          :status => {:privacyStatus => 'public'}
        }
      )
    end

    def populate_with_songs(songs)
      @youtube_id.blank? ? create : recreate

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

    def create
      result = @client.playlist_action('create', self)
      @youtube_id = result.data.id
    end

    def recreate
      result = @client.playlist_action('recreate', self)
      @youtube_id = result.data.id
    end
  end
end
