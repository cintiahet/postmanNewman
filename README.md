# RestfulBooker Documentation
https://restful-booker.herokuapp.com/apidoc/index.html

## Run RestFullBoker locally with Docker

1 - Install Docker https://docs.docker.com/docker-for-windows/install/

2 - Install Docker compose https://docs.docker.com/compose/install/

3 - Clone RestFullBooker Repo: https://github.com/mwinteringham/restful-booker

4 - Follow the readme steps for installation via Docker:

    Navigate into the restful-booker root folder

    Run docker-compose build

    Run docker-compose up

    APIs are exposed on http://localhost:3001


# Practice 1

## Check requests contracts

Excercise 0:
 - Create a new environment in postman, add a url variable and use the variable to do the requests in the following exercices
 https://learning.postman.com/docs/postman/variables-and-environments/variables/
- Create a new Collection and save all the exercises in it https://learning.postman.com/docs/postman/collections/creating-collections/#how-to-create-collections

Exercise 1: ​

- Test Get endpoints and report the bugs.​
    - Ask for all the bookings
    - Ask for bookings by: id and other filters

Exercise 2: ​

- Create a new  Booking and report all the bugs found.
    - Check boundaries
    - Check data types
    - Check headers
    - Response format
    - Responses status codes
    - Response Errors
    - Headers

Exercise 3:
 - Check minimal security validation
 - Test  SetToken endpoint

Exercise 4:

- Update a booking using the token to authenticates
- Update a booking using the basic auth
- Find update bugs
- Update a booking sending just a part of the payload 

