// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // Create a kit
	"cardId": 1,
	"name": "VS KIT"
	} 
let grabjson;
let newKitId;


// Create a Kit

test('Should return status code 201', async () => {
    let actualResponseCode;
	try {

		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseCode = response.status;
		grabjson = await response.json();
		// grab json id
		newKitId = grabjson.id;

	} catch (error) {
		console.error(error);
	}
	expect(actualResponseCode).toBe(201);
});

//Check body of added kit card name = "For the Situation"
test('Response body card name should contain "For the situation"', async () => {
   let actualResponseBody;
	try {

		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();

	} catch (error) {
		console.error(error);
	}
	
	expect(actualResponseBody.card['name']).toContain('For the situation');
});

// Validate New kit was created
test (`Should validate that new kit was created with Get Request with status 200`, async () => {
let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${newKitId}`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});