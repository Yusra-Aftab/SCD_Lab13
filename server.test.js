const request = require ("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');
const { describe } = require("node:test");
const { exportAllDeclaration } = require("@babel/types");

describe("Test the root path" , () => {

    test("It should response the GET method", () => {
        const response = request(app).delete("http://localhost:8000/User/add").send({
            "Name" : "Yusra",
            "Email": "@yusra",
            "age" : 20,
            "Contact" : 123, 
        })
        expect(response.statusCode).toBe(200);
    })
})


describe("Test the root path" , () => {

    test("It should response the GET method", () => {
        const response = request(app).post("http://localhost:8000/User/add").send({
            "Name" : "Yusra",
            
        })
        expect(response.statusCode).toBe(200);
    })
})