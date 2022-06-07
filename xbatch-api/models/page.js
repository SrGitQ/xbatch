const mongoose = require('mongoose');

// create student schema & model
const PageSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
});


const Page = mongoose.model('page',PageSchema);

module.exports = Page;
