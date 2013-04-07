class PlaylistRakeMailer < ActionMailer::Base
  default from: "admin@stormyflower.com"

  def create_all_email(youtube_playlists)
    @youtube_playlists = youtube_playlists
    mail(
      :to => 'ami4b@virginia.edu',
      :subject => "[stormyflower] Created All Playlists"
    )
  end

  def update_email(youtube_playlist)
    @youtube_playlist = youtube_playlist
    mail(
      :to => 'ami4b@virginia.edu',
      :subject => "[stormyflower] Updated #{youtube_playlist.title} Playlist"
    )
  end

  def update_all_email(youtube_playlists)
    @youtube_playlists = youtube_playlists
    mail(
      :to => 'ami4b@virginia.edu',
      :subject => "[stormyflower] Updated All Playlists"
    )
  end
end
