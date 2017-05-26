var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  desc: {
    type: String
  },
  status: {
    type: boolean
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);