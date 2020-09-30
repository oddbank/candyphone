const mongoose = require("mongoose");
const Timestamp = require("./Timestamp");
const User = require("./User");

const plinkSchema = new mongoose.Schema({
   name : { type: String, required: true },
   description : { type: String, required: true, maxlength: 200 },
   imageUrl: { type: String,  required: true, validate: {
    validator: function(v) {
      return /.*(jpeg|jpg|png|gif|bmp)$/.test(v);
    },
    message: props => `${props.value} is not a valid Url!`
  }, },
  difficultyLevel: { type: Number, required: true , min:1,max:6 },
  timestamps:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Timestamp' }],
  createdBy:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true }

});

module.exports = mongoose.model('Plink',plinkSchema);