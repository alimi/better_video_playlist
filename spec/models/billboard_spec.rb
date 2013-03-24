require 'spec_helper'

describe Billboard do
  describe '#songs_for_chart' do
    let(:name) { 'hot_100' }

    subject do
      VCR.use_cassette 'billboard/hot_100' do
        Billboard.songs_for_chart(name)
      end
    end

    it { should include 'Locked Out Of Heaven Bruno Mars' }
    its(:length) { should == 100 }
  end
end
