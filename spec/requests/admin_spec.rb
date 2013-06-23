require 'spec_helper'

describe 'Admin' do
  subject { page }
  let(:username) { BetterVideoPlaylist::Application.config.youtube_username }

  describe 'Login' do
    before { basic_authorization_login }

    it do
      should have_content BetterVideoPlaylist::Application.config.
        youtube_username
    end
  end

  describe 'Getting YouTube authorization' do
    before do
      basic_authorization_login
      pending "Should I stay or should I go?"
      click_link "Get Authorization to use #{username} data"
    end

    it { should have_content 'The refresh token is' }
  end
end

# Authorization is driver specific
def basic_authorization_login
  page.driver.browser.
    basic_authorize(
      BetterVideoPlaylist::Application.config.admin_username,
      BetterVideoPlaylist::Application.config.admin_password
    )

  visit admin_path
end
