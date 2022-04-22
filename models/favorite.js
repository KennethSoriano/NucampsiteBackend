const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    campsites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'campsites'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
})

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;