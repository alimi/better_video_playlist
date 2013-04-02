require 'nokogiri'
require 'open-uri'

class Billboard
  def self.songs_for_chart(name)
    chart_data = Nokogiri::HTML(open(url_for_chart(name)))
    chart_data.xpath('//item/title').map do |node|
      parse node.content
    end
  end

  private

    def self.parse(data)
      data[data.index(':') + 2, data.size].gsub(/,/, '')
    end

    def self.url_for_chart(name)
      case name
      when 'hot_100'
        return 'http://www.billboard.com/rss/charts/hot-100'
      when 'hip_hop'
        return 'http://www1.billboard.com/rss/charts/r-b-hip-hop-songs'
      when 'country'
        return 'http://www1.billboard.com/rss/charts/country-songs'
      when 'rock'
        return  'http://www1.billboard.com/rss/charts/rock-songs'
      when 'latin'
        return 'http://www1.billboard.com/rss/charts/latin-songs'
      when 'dance'
        return 'http://www1.billboard.com/rss/charts/dance-club-play-songs'
      end
    end
end
