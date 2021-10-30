const mongoose = require('mongoose');
const config = require('config');
const dbURI = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true
        });
        console.log("CONNECTED");
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = connectDB;
