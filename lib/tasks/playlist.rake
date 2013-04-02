namespace :playlist do
  namespace :create do
    desc "create playlists with Billboard data"
    task :all => :environment do
      client = Youtube::Client.new
      client.refresh_access_token

      %w(hot_100 hip_hop country rock latin dance).each do |name|
        playlist = Playlist.new(:name => name)
        songs = Billboard.songs_for_chart(name)
        youtube_playlist = Youtube::Playlist.new(client, playlist)

        playlist.youtube_id = youtube_playlist.populate_with_songs(songs)
        playlist.save
      end
    end
  end

  desc "update playlist 'name' with latest Billboard data"
  task :update, [:name] => :environment do |t, args|
    # rake "playlist:update[name]"

    client = Youtube::Client.new
    client.refresh_access_token

    playlist = Playlist.find_by_name(args.name)
    songs = Billboard.songs_for_chart(args.name)
    youtube_playlist = Youtube::Playlist.new(client, playlist)

    playlist.youtube_id = youtube_playlist.populate_with_songs(songs)
    playlist.save
  end

  namespace :update do
    desc "update all playlists with latest Billboard data"
    task :all => :environment do
      client = Youtube::Client.new
      client.refresh_access_token

      Playlist.all.each do |playlist|
        songs = Billboard.songs_for_chart(playlist.name)
        youtube_playlist = Youtube::Playlist.new(client, playlist)

        playlist.youtube_id = youtube_playlist.populate_with_songs(songs)
        playlist.save
      end
    end
  end
end
