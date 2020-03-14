const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessagesSchema = new Schema({
  usedId: {
    type: [],
    required: true
  },
  comments: {
    type: [],
    default: []
  }
});

const Messages = mongoose.model('Messages', MessagesSchema);
module.exports = Messages;
