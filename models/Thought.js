const {Schema, model} = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
        },
        createedAt: {
            type: Date,
            default: Date.now(),
            // use a getter method to format the timestamp on query
            timestamps: {
                currentTime: () => Math.floor(Date.now() / 1000),
            },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);
module.exports = Thought;