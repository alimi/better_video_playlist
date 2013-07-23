# better_video_playlist by alimi

This project is the next iteration of
[video_playlist](https://github.com/alimi/video_playlist).  It is also my
battleground to explore new tools and ideas.  The application is built using
[Backbone.js](http://backbonejs.org/), a client-side MVC framework.  It is also
influenced by best practices described in [Recipes with
Backbone](http://recipeswithbackbone.com/).  The application was designed with
mobile in mind and the [Golden Grid System](http://goldengridsystem.com/) was
used to create a responsive design.

The application shows a list of YouTube playlists based on the Billboard charts.
The playlists are automatically updated every Thursday morning with the latest
chart data.  You can view the application at
[stormyflower.com](htttp://www.stormyflower.com).

## Usage

This project was created as a learning tool for myself and I invite you to learn
from it too.  There is a litle bit of setup before you can use the application,
but first you should clone it:  `git clone
git@github.com:alimi/better_video_playlist.git`.

### Configuration

#### YouTube/Google Accounts

You'll need a Google account to access the YouTube/Google APIs.  You can use a
new or existing account.  You'll have to follow the steps
[here](https://developers.google.com/console/help/#UsingKeys) to generate the
following values:  Client ID, Client Secret, and Redirect URIs.

### Application/Environment Variables

Custom application variables have been set in the following files:
`config/initializers/admin_credentials.rb`,
`config/initializers/gmail_credentials.rb`, and 
`config/initializers/youtube_credentials.rb`.  The variables are populated with
values from environment variables set in the local bash enviornment.  Read more
about this setup
[here](https://devcenter.heroku.com/articles/config-vars#other-local-options).

You'll need to set the following enviornment variables:

This first group is used for administration of the application.  They can be
whatever you want.
  * `better_video_playlist_username`: admin username
  * `better_video_playlist_password`: admin password
  * `better_video_playlist_email`: admin email

I've configured the application to use Gmail to deliver messages.  Gmail is OK
for this small, lighlty-used applicaiton.  Set the following variables for the
Gmail account you wish to use.
  * `gmail_username`
  * `gmail_password`

The last group are the YouTube credentials used by the application to access
various items on YouTube.
  * `youtube_username`: User account that will store YouTube playlists
  * `youtube_client_id`: Generated from the Google APIs console
  * `youtube_client_secret`: Generated from the Google APIs console
  * `youtube_refresh_token`: Generated through the admin section of the
    application.  This will need to be configured later.

### Configure Rails Backend

I'm assuming you're running on a system with Ruby on Rails installed.  To
install Ruby on Rails and its dependencies, read the [install section in the
Ruby on Rails Tutorial](http://ruby.railstutorial.org/ruby-on-rails-tutorial-book#sec-rubygems).

First, you'll need to install some gems:

  * `bundle install`

Then, setup the development and test databases:

  * `rake db:migrate`
  * `rake db:migrate RAILS_ENV=test` or `rake db:test:prepare`

If you decide to run this in production, you'll also have to setup the
production databases wherever you running the production instance:

  * `rake db:migrate RAILS_ENV=production`

But I'm assuming you're working locally.

Start the server:

  * `rails s`

And go to [http://localhost:3000/admin](http://localhost:3000/admin).  Enter the
credentials defined earlier for `better_video_playlist_username` and
`better_video_playlist_password`. Follow the directions to give the application
access to `youtube_username`'s data.  You will be redirected to Google screens
and come back to the application when finished.  Copy the
`youtube_refresh_token` displayed on the page and set the environment variable
locally.

Then, you can create some playlists:

  * `rake playlist:create:all`

If you go to `youtube_username`'s YouTube account, you should see some new
playlists.

Now, visit the application at [http://localhost:3000](http://localhost:3000).
Restart the server if you stopped it earlier by re-running `rails s`.

## Backbone Code

The bulk of the application is built using Backone.js to drive interaction on
the client side.  You can find the code
[here](https://github.com/alimi/better_video_playlist/tree/master/public/javascripts/playlist).

## Tests

All tests are written using [RSpec](http://rspec.info/) and
[Capybara](http://jnicklas.github.io/capybara/).  Run tests by running
`rspec spec` or `rake`.

## Create or Update Playlists

The following rake tasks are defined to create/update playlists:

  * `rake playlist:create:all`: create playlists with Billboard data on Youtube
  * `rake playlist:update[name]`: update playlist 'name' with latest Billboard
    data
  * `rake playlist:update:all`: update all playlists with latest Billboard data

## Contributing

I'm open to any and all feedback.  Really!  It's a great way to learn!

Pull requests accepted! :smiley_cat:

## License

Licensed under GPLv2
