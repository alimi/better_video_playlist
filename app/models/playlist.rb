class Playlist < ActiveRecord::Base
  attr_accessible :name

  def self.updateVideos(name)
    playlist = Playlist.find_or_create_by_name name
  end
end
