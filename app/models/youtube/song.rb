require 'google/api_client'

module Youtube
  class Song
    def initialize(client, playlist_id)
      @client = client
      @playlist_id = playlist_id
    end

    def set_video_from_query(query)
      results = @client.search_action(query)
      @video_id = results.data.items.first.id.videoId
    end

    def to_json
      JSON(
        {
          :snippet => {
            :playlistId => @playlist_id,
            :resourceId =>
              {:kind => 'youtube#video', :videoId => @video_id}
          }
        }
      )
    end
  end
end
