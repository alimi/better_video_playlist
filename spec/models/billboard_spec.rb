require 'spec_helper'

describe Billboard do
  describe '#songs_for_chart' do
    let(:name) { 'hot_100' }
    subject { Billboard.songs_for_chart name }
    it { should include 'Locked Out Of Heaven Bruno Mars' }
    its(:length) { should == 100 }
  end
end
