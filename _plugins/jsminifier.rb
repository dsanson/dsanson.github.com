require 'jsmin'

module Jekyll
  class JSMinifier < Converter
    safe true

    priority :low

    def setup
      STDERR.puts 'This never gets logged.'
    end

    def matches(ext)
      puts("Neither does this.")
      ext =~ /js/i
    end 

    def output_ext(ext)
      ".js"
    end
	def convert(content)
  		JSMin.minify(content)
	end
  end
end
