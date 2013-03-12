require 'google/api_client'

module Youtube
  class Authorization
    def initialize(client)
      @client = client
    end

    def authorization_redirect_url
      @client.authorization.authorization_uri.to_s
    end

    def generate_refresh_token(authorization_code)
      @client.authorization.code = authorization_code
      response = @client.authorization.fetch_access_token!
      response['refresh_token']
    end
  end
end
