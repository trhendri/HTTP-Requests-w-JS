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
let actualResponseCode;
let bodyResponse;
test('Check response status code 200 after delete and response body', async () => {
    
	//create kit
	try {

		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseCode = response.status;
		//grab json
		grabjson = await response.json();
		// grab json id
		newKitId = grabjson.id;
		let actualStatusCode;
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
		// Confirm in console the body response
		console.log(bodyResponse);
		
		expect(bodyResponse.ok).toBeTruthy();
	

});
/*
// Check Response body
test('Check response body after delete', async () => {
	
	try {

		
		actualResponseCode = response.status;
		//grab json
		grabjson = await response.json();
		// grab json id
		newKitId = grabjson.id;
	
	} catch (error) {
		console.error(error);
	}
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${newKitId}`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
		//expect(grab.json).toBe(200);	
	

});




/* / Delete a kit and check status code
test('delete kit', async () => {
   let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${newKitId}`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
		expect(actualStatusCode).toBe(200);
		
});



//Create a Kit
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
		newKitiId = await response.json();

	} catch (error) {
		console.error(error);
	}
	expect(actualResponseCode).toBe(201);
	

});



// Check body of response code of kit when deleted

test('Check response body of deleted kit', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody.ok).toBeTruthy();
});

// Check if kit exists
*/