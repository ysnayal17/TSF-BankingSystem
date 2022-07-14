const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/TSF', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.log(error.message));

const seedUsers = [
    {
        name: 'Luffy',
        email: 'luffy01@gmail.com',
        credits: 300000000
    },
    {
        name: 'Zoro',
        email: 'zoro02@gmail.com',
        credits: 120000000
    },
    {
        name: 'Nami',
        email: 'nami03@gmail.com',
        credits: 16000000
    },
    {
        name: 'Ussop',
        email: 'ussop04@yahoo.com',
        credits: 30000000
    },
    {
        name: 'Sanji',
        email: 'sanji05@gmail.com',
        credits: 77000000
    },
    {
        name: 'Chopper',
        email: 'chopper06@yahoo.com',
        credits: 50
    },
    {
        name: 'Robin',
        email: 'robin07@gmail.com',
        credits: 80000000
    },
    {
        name: 'Franky',
        email: 'franky08@yahoo.com',
        credits: 44000000
    },
    {
        name: 'Brook',
        email: 'brook09@gmail.com',
        credits: 33000000
    }
]

User.insertMany(seedUsers)
    .then(res => console.log(res))
    .catch(err => console.log(err))
