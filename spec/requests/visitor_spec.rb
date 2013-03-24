require 'spec_helper'

describe "Visitor", :js => true do
  describe "Visit Home" do
    before do
      pending 'Selinium web driver not working with Firefox?'
      visit root_path
    end

    subject { page }

    it do
      should have_selector "iframe", count: 6
    end
  end
end
