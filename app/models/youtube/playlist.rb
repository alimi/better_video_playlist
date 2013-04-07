require 'google/api_client'

module Youtube
  class Playlist
    attr_accessor :youtube_id
    attr_reader :title, :success_message, :error_message, :failing_songs

    def initialize(client, playlist)
      @client = client
      @title = playlist.name
      @youtube_id = playlist.youtube_id
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
          log_successful_add
        else
          log_failing_add(song, result.data.error)
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

    private

      def log_successful_add
        @added ||= 0
        @added += 1
        @success_message = "Successfully added #{@added} songs to #{@title}."
      end

      def log_failing_add(song, error)
        @failed ||= 0
        @failed += 1
        @error_message = "Failed to add #{@failed} songs to #{@title}."

        @failing_songs ||= []
        @failing_songs << "'#{song}' was not added because of #{error}"
      end
  end
end
