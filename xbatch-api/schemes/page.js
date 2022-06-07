const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const PageSchema = new Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
});


const Page = mongoose.model('page',PageSchema);

module.exports = Page;
