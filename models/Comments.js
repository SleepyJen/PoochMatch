const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    userId: {
        type: [],
        required: true
    },
    comments: {
        type: [],
        default: []
    }
});

const Comments = mongoose.model('Comments', CommentsSchema);
module.exports = Comments;