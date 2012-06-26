require 'spec_helper'

describe "StaticPages" do
  describe "Home" do
    before { visit root_path }

    subject { page }

    it do
      pending "Backbone.js ui"
      should have_selector "iframe", count: 6
    end
  end
end
