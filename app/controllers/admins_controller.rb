class AdminsController < ApplicationController
  http_basic_authenticate_with(
    :name => BetterVideoPlaylist::Application.config.admin_username,
    :password => BetterVideoPlaylist::Application.config.admin_password
  )

  def show
    @youtube_username = BetterVideoPlaylist::Application.config.youtube_username
  end
end
