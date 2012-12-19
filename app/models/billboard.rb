require 'nokogiri'
require 'open-uri'

class Billboard
  def self.songs_for_chart(name)
    chart_data = Nokogiri::HTML(open(url_for_playlist(name)))
    chart_data.xpath('//item/title').map do |node|
      parse node.content
    end
  end

  private

    def self.parse(data)
      data[data.index(':') + 2, data.size].gsub(/,/, '')
    end

    def self.url_for_playlist(name)
      case name
      when 'hot_100'
        return 'http://www.billboard.com/rss/charts/hot-100'
      end
    end
end
