class PlaylistsController < ApplicationController
  respond_to :json, :html

  def index
    @playlists = Playlist.all
    respond_with @playlists
  end
end
