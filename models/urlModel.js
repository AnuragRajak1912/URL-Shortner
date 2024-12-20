const {Schema,model} = require('mongoose');
const urlSchema = new Schema({
    shortURL : {
        type : String,
        required : true,
        unique : true,
    },
    originalURL : {
        type : String,
        required : true,
    }
});
const URL = model('url',urlSchema);
module.exports = URL;