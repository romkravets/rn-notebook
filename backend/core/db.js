const mongoose = requere('mongoose');

mongoose.connect('mongodb://localhost:27017/work', {useNewUrlParser: true});

module.export = mongoose;