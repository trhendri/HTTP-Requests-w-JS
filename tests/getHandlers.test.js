// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	// Create a kit
	"cardId": 1,
	"name": "GET KIT"
	} 


	let actualStatusCode;
	let grabjson;
	let newKitId;

	
	// Create a Kit
	
	test('Should return status code 200', async () => {
		try {
	
			const response = await fetch(`${config.API_URL}/api/v1/kits?cardid=1`, {
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

	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${newKitId}`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
}); 
 
test('Name field in body should contain "GET KIT"', async () => {
	let actualResponseBody;
	try {
		const response= await fetch(`${config.API_URL}/api/v1/kits/${newKitId}`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody.name).toContain('GET KIT');
});