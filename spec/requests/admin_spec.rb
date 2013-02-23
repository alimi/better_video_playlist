require 'spec_helper'

describe 'Admin' do
  describe 'Login' do
    before do
      page.driver.browser.
        basic_authorize(
          BetterVideoPlaylist::Application.config.admin_username,
          BetterVideoPlaylist::Application.config.admin_password
        )

      visit admin_path 
    end

    subject { page }

    it do
      should have_content BetterVideoPlaylist::Application.config.
        youtube_username
    end
  end
end
