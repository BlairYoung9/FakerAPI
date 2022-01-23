const express = require("express");
const app = express();
const port = 8000;

const faker = require('@faker-js/faker');
const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard(); // random contact card containing many properties

class User{
    constructor (){
        //this._id = _id;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company{
    constructor(){
        //this._id = _id;
        this.name = faker.company.companyName();
        this.address = address;
        this.street = faker.address.streetAddress();
        this.city = faker.address.cityName();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();         
        this.country = faker.address.country();
    }
}

app.get("/api/users/new/", (req,res) => {
    res.json(new User());
});

app.get("/api/companies/new/", (req,res) => {
    res.json(new Company());
});

app.get("/api/user/company/", (req,res) => {
    res.json( new Company());
});

console.log("hello world")

app.listen( port, () => console.log(`Listening on port: ${port}`));