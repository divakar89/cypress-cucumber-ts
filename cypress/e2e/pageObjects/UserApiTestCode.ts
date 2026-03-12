export default class UserApiTestCode {
    private baseUrl: string;
    private getUser: any;

    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/users';
        this.getUser = null;
    }
     
    getUserDetails() {      
        cy.request({
            method: 'GET',
            url: this.baseUrl,
        }).then((userDetails) => {
            expect(userDetails.status).to.eq(200);
            this.getUser = userDetails.body[0];
        });
    }

    validateGetResponse() {
        expect(this.getUser).to.exist; 
        expect(this.getUser).to.have.property('name');
    }
}
