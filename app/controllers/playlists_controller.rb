class PlaylistsController < ApplicationController
  respond_to :json, :html

  def index
    respond_with Playlist.all
  end
end
