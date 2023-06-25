const { Schema, Types } = require('mongoose');
const dateformat = require('../utils/dateformat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: dates => dateformat(dates)
        },
        userName: {
            type: String,
            required: true
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

module.exports = Thought;