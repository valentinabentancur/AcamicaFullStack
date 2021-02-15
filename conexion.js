const mongoose = require('mongoose');


const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
mongoose.connect("mongodb://acamica:acamica@localhost:27017/acamica", options);


module.exports = mongoose;