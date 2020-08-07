const db = require('./models');

db.user.create({ //user refers to user.js model
    firstName: 'Barent',
    lastName: 'Langwell',
    age: 30,
    email: 'b.langwell@outlook.com'
}).then(data => {
    console.log(data);
})

// SEARCH BY ID
db.user.findOne({
    where: { id: 1 }
}).then(user => {
    console.log('=====USER 1=======')
    console.log(user.dataValues);
})

// SEARCH BY NAME
db.user.findOne({
    where: { firstName: 'Barent' }
}).then(user => {
    console.log(user.dataValues);
})

// SEARCH BY EMAIL
db.user.findOne({
    where: { email: 'b.langwell@outlook.com'}
}).then(user => {
    console.log(user.dataValues);
})

db.user.findOrCreate({
    where: { 
        firstName: 'Kimber', 
        lastName: 'Inness-Brown'
    },
    defaults: { age: 28, email: 'kimber@kimber.kimber'}
}).then(([user, created]) => {
    console.log(`this was created ${created}`)
    console.log(user.dataValues);
});

let queryOne = {
    where: {
        firstName: 'Kimber',
        lastName: 'Inness-Brown'
    },
    defaults: { age: 25, email: 'kimber@kimber.kimber'}
}

db.user.findOrCreate(queryOne).then(([user, created]) => {
    console.log(created);
    console.log(user.dataValues);
});

// findAll returns an array of users
// use array method forEach() to loop through
db.user.findAll().then(users => {
    users.forEach(u => {
        console.log(u.dataValues.firstName);
    })
});

