import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import UserApiTestCode from '../pageObjects/UserApiTestCode';

const userApiTest = new UserApiTestCode();

Given('I send a GET request to the user API', function() {
    userApiTest.getUserDetails();
});

Then('I should receive the expected user details', function() {
    userApiTest.validateGetResponse();
});

Given('I update user data via the posts API', () => {
    const timestamp = Date.now();
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const payload = {
        userId: 1,
        title: 'Post Title ' + timestamp,
        body: 'This is the body of the post created at ' + timestamp
    };

    cy.request({
        method: 'POST',
        url: apiUrl,
        body: payload,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).as('apiResponse').then((response) => {
        if (response.status !== 201) {
            throw new Error(`Failed to create post. Status code: ${response.status}`);
        }
    });
});

Then('the API should respond with a success status code', () => {
    cy.get('@apiResponse').its('status').should('equal', 201);
});
