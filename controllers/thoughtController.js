const {ObjectId} = require('mongoose').Types;
// const {user, thought, reaction} = require('../models');

module.exports = {
    // Get all thoughts
    getAllThoughts(req, res) {
        return res.json({"message": "API to get all thoughts is called"});
    },

    // create a new thought
    createThought(req, res) {
        return res.json({"message": "API to create thought is called"});
    },

    // get a single thought by its id
    getSingleThought(req, res) {
        return res.json({"message": "API to get single thought is called"});
    },

    // update a thought by its id
    updateThought(req, res) {
        return res.json({"message": "API to update thought is called"});
    },

    // delete a thought by its id
    deleteThought(req, res) {
        return res.json({"message": "API to delete thought by id is called"});
    },

    createReaction(req, res){
        return res.json({"message": "API to create reaction is called"});
    },

    deleteReaction(req, res){
        return res.json({"message": "API to remove reaction is called"});
    },
};