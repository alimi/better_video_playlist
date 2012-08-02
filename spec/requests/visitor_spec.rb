require 'spec_helper'

describe "Visitor" do
  describe "Visit Home" do
    before { visit root_path }

    subject { page }

    it do
      should have_selector "iframe", count: 6
    end
  end
end
