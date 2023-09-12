# stage-two-backend
hng backend track stage 2

STANDARD FORMATS FOR MAKING REQUEST & RESPONSE FOR EACH ENDPOINT:

REST

POST REQUEST & FORMAT: 
Done making HTTP POST method along to the endpoint '/api'. Parameter are included in the request body. A successful Response returns user data in JSON format bearing user name, mongo DB assigned id and timestamp. 

GET REQUEST & FORMAT: 
Done making HTTP GET method along to the endpoint '/api', which returns all the user names, ids, and timestamp from the mongo DB database using the .find() function in JSON format for data exchange when res status code is 200 else an error message is returned if status code is 500.
Also the endpoint '/api/:id' which when receiving the user id returns the single users details.

PUT REQUEST & FORMAT: 
Done making HTTP PUT method along to the endpoint '/api/:id'. User id is dynamic as the distinct id (assigned from mongoDB) is passed into the endpoint to get existing user and gotten through req.params also the request body bears the new name to update to gotten through req.body to update user using the findByIdAndUpdate function and  the response returns the updated name in JSON when status code is 200, else if inputted user doesnt exist an error message is returned with the message "User does not exist".

DELETE REQUEST & FORMAT: 
Done making HTTP DELETE method along to the endpoint '/api/:id'. User id is dynamic as the distinct id (assigned from mongoDB) is passed into the endpoint to get exisitng user and gotten through req.params and delete action implemented using findByIdAndDelete(id) which on success returns a message "User deleted successfully" in JSON.

LIMITATIONS:
On making a  request to an endpoint, if the user id being passed in does not exist an error message "user does not exist" is returned.

INSTRUCTIONS FOR DEPLOYING THE API ON A SERVER:
