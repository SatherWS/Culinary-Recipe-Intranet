from recipe_scrapers import scrape_me
import sys, urllib

url = urllib.parse.quote_plus(sys.argv[1])
scraper = scrape_me(url, wild_mode=True)
data = ""
data += str(scraper.title())
data += str(scraper.total_time())
data += str(scraper.yields())
data += str(scraper.ingredients())
data += str(scraper.instructions())
data += str(scraper.image())
data += str(scraper.host())
data += str(scraper.links())
data += str(scraper.nutrients())  # if available
print(data)
