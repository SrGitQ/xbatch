const mongoose = require('mongoose');

/**
 * 
{
    "_id": {
        "$oid": "629fc18ba9037b9733615762"
    },
    "url": "https://cloud.mongodb.com/",
    "priority": "0",
    "status": "0",
    "batch": "4",
    "owner": "Juan",
    "comments": ""
}
 */


// create student schema & model
const PageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        default: '',
    },
    priority: {
        type: String,
        required: false,
        default: '0',
    },
    status: {
        type: String,
        required: false,
        default: '0',
    },
    batch:{
        type: String,
        required: false,
    },
    owner:{
        type: String,
        required: false,
    },
    comments:{
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('page',PageSchema);
