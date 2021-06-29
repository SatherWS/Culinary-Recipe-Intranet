from recipe_scrapers import scrape_me
import sys, pymysql.cursors

# Note: urls cannot have trailing forward slashes (fix later)
# url = "https://www.allrecipes.com/recipe/284773/korean-barbecue-short-ribs-teriyaki"
# url = "https://www.bbcgoodfood.com/recipes/turkey-coriander-burgers-guacamole"

url = sys.argv[1]
scraper = scrape_me(url, wild_mode=True)
print(scraper.title())
print(scraper.total_time())
print(scraper.yields())
print(scraper.ingredients())
print(scraper.instructions())
print(scraper.image())
print(scraper.host())

try:
	scraper.nutrients()  # if available
except:
	print("nutrition info not found")

# mongo db will be faster than creating a bunch of xml files
# but, mysql is already in our skill set.