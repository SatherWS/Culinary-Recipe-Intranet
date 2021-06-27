from recipe_scrapers import scrape_me
from xml.dom import minidom
import xml.etree.ElementTree as et
import sys

# Note: urls cannot have trailing forward slashes (fix later)
# url = "https://www.allrecipes.com/recipe/284773/korean-barbecue-short-ribs-teriyaki"
# url = "https://www.bbcgoodfood.com/recipes/turkey-coriander-burgers-guacamole"

url = sys.argv[1]
scraper = scrape_me(url, wild_mode=True)

# fucking noob https://www.geeksforgeeks.org/create-xml-documents-using-python/

root = minidom.Document()
xml = root.createElement("recipe")
xml.inner = "asdf"
root.appendChild(xml)
title = root.createElement(scraper.title())
xml.appendChild(title)

#scraper.total_time()
#scraper.yields()
#scraper.ingredients()
#scraper.instructions()
#scraper.image()
#scraper.host()
#scraper.links()

try:
	scraper.nutrients()  # if available
except:
	print("nutrition info not found")

filename = scraper.title().replace(" ", "_")
filename += ".xml"
print(filename)
xml_str = root.toprettyxml(indent ="\t") 

with open("/var/www/html/src/data/"+filename, "w") as f:
	f.write(xml_str)