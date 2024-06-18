# Sprint 7 project - Talise Hendrix


Description: The file contains practice tests for Sprint 7 to review using git, node.js using GET, POST, PUT, and DELETE Requests.
 
The projects utilizes the Urban Grocers Api.

Technologies Used: Node.js, Git/Github, VS Studio, Jest framework, Asyhnchronous JS, and Postman for confirmation.

Instructions to run tests:
Each test is divided into individual js files based on their HTTP requests -- GET, POST, PUT, DELETE. 


Each Request contains two test cases, One case to to test the response status code and another to parce the resonse of the request body to ensure it contains the expected data. 

The config file contains the API url/server to use with the endpoints for each request.

The GetHandlers.test.js file uses a Get request to retrieve a kit from the Urban Grocers API. Its tests that the request was sent succesfuly and that the response body contains the expected name of the kit.

The POSTHandlers.test.js file uses the POST method to create a new kit with a custome name to a particular card. Once again, the first test confirms the request was sent successfully with a 201 status code and the second test confirms that the request body contains the expected information.

The next file, PUTHanders.test.js also the user to test the update functionality of the Urban Grocers API. The first test confirmes the update to a name change for a kit has been completed successfully and the confirms the confirms the contents of the reponse.

Finally, the DELETEHandlers.test.js file tests the delete method.  A kit is create then deleted, while checking the status codes to confirm the kit was created and deleted successfully. And of course, the also checks the response body contents.


To Run the tests,
ensure the a npm is installed by using npm ,natigate to the tests folder in the terminal and run :  npx jest tests/*preferred_test_file.js 
