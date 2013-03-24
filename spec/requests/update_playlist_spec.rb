require 'spec_helper'

describe 'Create playlist' do
  describe 'and associate it with Youtube playlist of Billboard songs' do
    let(:playlist) { Playlist.new :name => 'hot_100' }
    let(:songs) { Billboard.songs_for_chart(playlist.name) }
    let(:client) { Youtube::Client.new }
    let(:youtube_playlist) { Youtube::Playlist.new(client, playlist.name) }

    subject { playlist }

    before do
      client.refresh_access_token
      playlist.youtube_id = youtube_playlist.populate_with_songs(songs)
    end

    its(:youtube_id) { should_not be_nil }
  end
end
