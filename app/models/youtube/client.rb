require 'google/api_client'

module Youtube
  class Client
    attr_reader :client

    def initialize
      @client = Google::APIClient.new
      @client.discovered_api('youtube', 'v3')
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

    def generate_tokens(authorization_code)
      @client.authorization.code = authorization_code
      response = @client.authorization.fetch_access_token!

      {
        :access_token => response['access_token'],
        :refresh_token => response['refresh_token']
      }
    end
  end
end
