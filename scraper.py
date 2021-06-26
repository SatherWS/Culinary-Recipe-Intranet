from recipe_scrapers import scrape_me
import sys, urllib

url = sys.argv[1]
# url = "https://www.allrecipes.com/recipe/284773/korean-barbecue-short-ribs-teriyaki"
# url = "https://www.bbcgoodfood.com/recipes/turkey-coriander-burgers-guacamole"
# Note: urls cannot have trailing forward slashes

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

try:
	data += str(scraper.nutrients())  # if available
except:
	print("nutrition info not found")

print(data)
