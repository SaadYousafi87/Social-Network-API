const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    getSingleThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// /api/throughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);


router.route('/:thoughtId/reactions/:reactionID').post(createReaction).delete(deleteReaction);


module.exports = router;