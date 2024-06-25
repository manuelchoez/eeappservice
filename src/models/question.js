const {Schema, model} = require('mongoose');
const question = Schema({
    code:{  
        type: String,
        required: true
    },
    question:{
        type: String,
        required: true
    },
});
module.exports = model('question', question);