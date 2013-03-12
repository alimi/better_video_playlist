class YoutubeAuthorizationsController < ApplicationController
  def create
    youtube = Youtube::Authorization.new(Youtube::Client.new)
    redirect_to youtube.authorization_redirect_url
  end

  def show
    youtube = Youtube::Authorization.new(Youtube::Client.new)
    refresh_token = youtube.generate_refresh_token(params[:code])
    flash[:notice] =
      "Authorized! The refresh token is #{refresh_token}"
    redirect_to admin_path
  end
end
