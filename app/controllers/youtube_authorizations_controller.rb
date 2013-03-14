class YoutubeAuthorizationsController < ApplicationController
  def create
    youtube = Youtube::Client.new
    redirect_to youtube.authorization_redirect_url
  end

  def show
    youtube = Youtube::Client.new
    tokens = youtube.generate_tokens(params[:code])
    flash[:notice] = "Authorized! " +
      "Access token: #{tokens[:access_token]}. " +
      "Refresh token: #{tokens[:refresh_token]}"
    redirect_to admin_path
  end
end
