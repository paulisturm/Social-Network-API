const { Schema, model } = require('mongoose');
const { format_date } = require('../utils/dateformat');
const reactionSchema = require('./reaction');

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
            get: dates => format_date(dates)
        },
        userName: {
            type: String,
            required: true
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    //console.log('this', this)
    return this.reactions.length
})
const Thought = model('thought', thoughtSchema);

module.exports = Thought;