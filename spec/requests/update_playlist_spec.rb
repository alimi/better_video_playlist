require 'spec_helper'

describe 'Update Playlist' do
  describe 'Create New Playlist' do
    before { Playlist.updateVideos 'test' }

    subject { Playlist.first }

    its(:name) { should == 'test' }

    describe 'Associated with Billboard chart' do
      its(:youtube_id) { should_not be_nil }
    end
  end
end
