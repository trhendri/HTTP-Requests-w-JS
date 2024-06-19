// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	// Create a kit
	"cardId": 1,
	"name": "NEW KIT"
	} 

const requestBody2 = {
"name": "This is a renamed Kit"

}  

let grabjson;
let newKitId;

// Rename the Kit Name

test('Status code of renamed kit should return 200', async () => {

// Create New Kit

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
//Update Kit
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${newKitId}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody2)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualStatusCode).toBe(200);
});

// Check that ok = true confirming Kit rename.
test('Response body OK should return true', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${newKitId}`, {
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

// Validate kit was updated in database with get request
// RESULTS IN BUG 500 status
test (`Validate kit was updated in database with GET status 200`, async () => {

	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${newKitId}`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});