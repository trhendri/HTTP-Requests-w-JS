// eslint-disable-next-line no-undef
const config = require('../config');


// Check status code of deleted kit
// Create  kit
const requestBody = {
    
	"cardId": 1,
	"name": "VS KIT"
	} 




// Create a Kit
let newKitId;
let grabjson;
let actualStatusCode;
let bodyResponse;
test('Should return status code 200 after delete and response body', async () => {
    
	//create kit
	try {

		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		
		//grab json
		grabjson = await response.json();
		// grab json id
		newKitId = grabjson.id;

	} catch (error) {
		console.error(error);
	} 
	// Delete kit
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${newKitId}`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
		bodyResponse = await response.json();
		
	} catch (error) {
		console.error(error);
	} //Confirm deletion
		expect(actualStatusCode).toBe(200);	
		
});

test('Should return Ok true in response body', async () => {
    
	
	// Delete kit
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${newKitId}`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
		bodyResponse = await response.json();
		
	} catch (error) {
		console.error(error);
	} //Confirm deletion
		expect(bodyResponse.ok).toBeTruthy();
		
		
	
});

// Validate that kit is deleted
test (`Should validate that new kit is deleted with status 404`, async () => {

	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${newKitId}`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(404);
});