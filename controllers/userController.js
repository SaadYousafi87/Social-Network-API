const {ObjectId} = require('mongoose').Types;
// const {user, thought, reaction} = require('../models');


module.exports = {
    // Get all users
    getAllUsers(req, res) {
        return res.json({"message": "API to get all users called"});
    },

    // Create a new user
    createUser(req, res) {
        return res.json({"message": "API to create new user is called"});
    },

    // Get a single user by its id
    getSingleUser(req, res) {
        return res.json({"message": "API to get single user is called"});
    },

    // update a user by its id
    updateUser(req, res) {
        return res.json({"message": "API to update user is called"});
    },

    // delete a user by its id
    // bonus: remove a user's associated thoughts when deleted.
    deleteUser(req, res) {
        return res.json({"message": "API to delete user is called"});
    },

    // post to add a new friend to a user's friend list
    createFriend(req, res){
        return res.json({"message": "API to create new friend is called"});
    },

    // delete to remove a friend from a user's friend list
    deleteFriend(req, res){
        return res.json({"message": "API to delete friend is called"});
    },
};