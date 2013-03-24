require 'spec_helper'

describe 'Create playlist' do
  describe 'and associate it with Youtube playlist of Billboard songs' do
    let(:playlist) { Playlist.new :name => 'hot_100' }
    let(:songs) do
      VCR.use_cassette 'billboard/hot_100' do
        Billboard.songs_for_chart(playlist.name)
      end
    end
    let(:client) { Youtube::Client.new }
    let(:youtube_playlist) { Youtube::Playlist.new(client, playlist.name) }

    subject { playlist }

    before do
      VCR.use_cassette 'youtube/refresh_authentication' do
        client.refresh_access_token
      end
      VCR.use_cassette 'youtube/populate_hot_100_playlist' do
        playlist.youtube_id = youtube_playlist.populate_with_songs(songs)
      end
      puts "playlist.youtube_id: #{playlist.youtube_id}"
    end

    its(:youtube_id) { should == 'PLOANzs84P9WSE3tcKD7mkipmXSC8LkuAE' }
  end
end
