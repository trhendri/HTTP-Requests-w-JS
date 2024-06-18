// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // Create a kit
	"cardId": 1,
	"name": "VS KIT"
	} 



// Create a Kit

test('Check response status code 201', async () => {
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

	} catch (error) {
		console.error(error);
	}
	expect(actualResponseCode).toBe(201);
});

//Check body of added kit card name = "For the Situation"
test('Check response Body for Card Name', async () => {
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