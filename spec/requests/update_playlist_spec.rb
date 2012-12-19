require 'spec_helper'

describe 'Update Playlist with YouTube content' do
  describe 'Create New Playlist' do
    let(:name) { 'hot_100' }
    let(:playlist) { Playlist.new :name => name }
    subject { playlist }

    describe 'Associated with Billboard chart' do
      before { playlist.set_youtube_id }
      its(:youtube_id) { should_not be_nil }
    end
  end
end
