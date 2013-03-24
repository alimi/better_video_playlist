require 'google/api_client'

module Youtube
  class Client
    def initialize
      @client = Google::APIClient.new
      @discovered_api = @client.discovered_api('youtube', 'v3')
      @client.authorization.client_id =
        BetterVideoPlaylist::Application.config.youtube_client_id
      @client.authorization.client_secret =
        BetterVideoPlaylist::Application.config.youtube_client_secret
      @client.authorization.redirect_uri =
        URI.parse('http://localhost:3000/youtube_authorization')
      @client.authorization.scope =
        'https://www.googleapis.com/auth/youtube'
    end

    def authorization_redirect_url
      @client.authorization.authorization_uri.to_s
    end

    def generate_refresh_token(authorization_code)
      @client.authorization.code = authorization_code
      response = @client.authorization.fetch_access_token!
      response['refresh_token']
    end

    def refresh_access_token
      @client.authorization.refresh_token =
        BetterVideoPlaylist::Application.config.youtube_refresh_token
      @client.authorization.fetch_access_token!
    end

    def search_action(query)
      @client.
        execute(
          :api_method => @discovered_api.search.list,
          :parameters =>
            {
              :part => 'id',
              :q => query,
              :type => 'video',
              :videoEmbeddable => 'true',
              :maxResults => 1
            }
        )
    end

    def playlist_action(playlist)
      @client.
        execute(
          :api_method => @discovered_api.playlists.insert,
          :parameters => {:part => 'snippet,status'},
          :body => playlist.to_json,
          :headers => {'Content-Type' => 'application/json'}
        )
    end

    def playlist_item_action(playlist_item)
      @client.
        execute(
          :api_method => @discovered_api.playlist_items.insert,
          :parameters => {:part => 'snippet'},
          :body => playlist_item.to_json,
          :headers => {'Content-Type' => 'application/json'}
        )
    end
  end
end
