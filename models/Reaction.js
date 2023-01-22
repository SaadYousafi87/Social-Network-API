const {Schema, model, Types} = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createAt: {
            type: Date,
            default: Date.now(),
            // use a getter method to format the timestamp on query
            timestamps: {
                currentTime: () => Math.floor(Date.now() / 1000),
            },
        },
    },
    
);

const Reaction = model('reaction', reactionSchema);
module.exports = Reaction;