class PlaylistRakeMailer < ActionMailer::Base
  default from: "admin@stormyflower.com",
    to: BetterVideoPlaylist::Application.config.admin_email

  def create_all_email(youtube_playlists)
    @youtube_playlists = youtube_playlists
    mail(:subject => "[stormyflower] Created All Playlists")
  end

  def update_email(youtube_playlist)
    @youtube_playlist = youtube_playlist
    mail(
      :subject => "[stormyflower] Updated #{youtube_playlist.title} Playlist"
    )
  end

  def update_all_email(youtube_playlists)
    @youtube_playlists = youtube_playlists
    mail(:subject => "[stormyflower] Updated All Playlists")
  end
end
