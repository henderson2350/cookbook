const User = require('../models/User');
const userDummyData = [
    {
        name: "Will",
        username:"WillB",
        password:"987654",
        bio: "I love gazelles"
    },
    {
        name: "Sandra",
        username:"SandySam",
        password:"23456",
        bio: "I love sand and walk longs on the beach"
    },
    {
        name: "Hector",
        username:"Hec101",
        password:"111111",
        bio: "I love to travel"
    }
]

const seedUser = () => User.bulkCreate(userDummyData);
module.exports = seedUser;