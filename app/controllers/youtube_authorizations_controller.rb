class YoutubeAuthorizationsController < ApplicationController
  def create
    youtube_api = YoutubeApi.new
    redirect_to youtube_api.get_authorization_redirect_url
  end

  def show
    youtube_api = YoutubeApi.new
    refresh_token = youtube_api.generate_refresh_token(params[:code])
    flash[:notice] =
      "Authorized! The refresh token is #{refresh_token}"
    redirect_to admin_path
  end
end
