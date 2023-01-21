const {ObjectId} = require('mongoose').Types;
// const {user, comment} = require('../models');


module.exports = {
    // Get all users
    getUsers(req, res) {
        console.log("API to get all users called.");
        return res.json({"message": "API to get all users called"});
    },

    // Create a new user
    createUser(req, res) {
        return res.json({"message": "API to create new user is called"});
    },

    // Get a single user
    getSingleUser(req, res) {
        return res.json({"message": "API to get single user is called"});
    },

    // delete user
    deleteUser(req, res) {
        return res.json({"message": "API to delete user is called"});
    }
}