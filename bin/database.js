/* This script sets up Scraped Recipe's Mongo database 
*  https://docs.mongodb.com/manual/reference/method/db.createCollection/#examples
*/

//new Mongo();
//show collections;

db.createCollection("recipes",{ 
	validator: { $jsonSchema: {
		bsonType: "object",
		required: ["title"],
		properties: {
			id: {

			}
			title: {

			}
			instructions: {

				ingredients: {
			}
	
			}
			url: {

			}
			date_added: {

			}
		}
});
