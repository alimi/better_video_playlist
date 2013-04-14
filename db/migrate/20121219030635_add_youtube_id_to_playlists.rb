class AddYoutubeIdToPlaylists < ActiveRecord::Migration
  def change
    add_column :playlists, :youtube_id, :string
  end
end
