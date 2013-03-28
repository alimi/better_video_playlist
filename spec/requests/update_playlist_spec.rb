require 'spec_helper'

describe 'Create playlist' do
  let(:playlist) { Playlist.new :name => 'hot_100' }
  let(:client) { Youtube::Client.new }
  let(:songs) do
    VCR.use_cassette 'billboard/hot_100' do
      Billboard.songs_for_chart(playlist.name)
    end
  end

  subject { playlist }

  before do
    VCR.use_cassette 'youtube/refresh_authentication' do
      client.refresh_access_token
    end
  end

  describe 'and associate it with Youtube playlist of Billboard songs' do
    let(:youtube_playlist) { Youtube::Playlist.new(client, playlist.name) }

    before do
      VCR.use_cassette 'youtube/populate_hot_100_playlist' do
        playlist.youtube_id = youtube_playlist.populate_with_songs(songs)
      end
    end

    its(:youtube_id) { should == 'PLOANzs84P9WSE3tcKD7mkipmXSC8LkuAE' }
  end

  describe 'and update its Youtube playlist of Billboard songs' do
    before { playlist.youtube_id = 'PLOANzs84P9WSE3tcKD7mkipmXSC8LkuAE' }

    let(:youtube_playlist) do
      Youtube::Playlist.new(client, playlist.name, playlist.youtube_id)
    end

    before do
      VCR.use_cassette 'youtube/repopulate_hot_100_playlist' do
        playlist.youtube_id = youtube_playlist.populate_with_songs(songs)
      end
    end

    its(:youtube_id) { should_not == 'PLOANzs84P9WSE3tcKD7mkipmXSC8LkuAE' }
  end
end
