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
  end
end
