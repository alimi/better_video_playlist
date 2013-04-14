namespace :heroku do
  namespace :playlist do
    namespace :update do
      desc "update all playlists on Thursdays for scheduled time"
      task :all => :environment do
        if Time.now.thursday?
          Rake::Task['playlist:update:all'].execute
        else
          puts "Try again on Thrusday!"
        end
      end
    end
  end
end
