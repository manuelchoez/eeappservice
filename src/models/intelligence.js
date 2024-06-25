const {Schema, model} = require('mongoose');
const mintelligence = Schema({    
    code: {
        type: String,
        required: true
    },
    intelligence:{
        type: String,
        required: true
    },
});

module.exports = model('mintelligence', mintelligence);
    