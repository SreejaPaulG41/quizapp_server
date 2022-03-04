const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtGenerator = (userId)=>{
    const payload = {
        user: userId
    }
    return jwt.sign(payload, process.env.jwtSecret, {expiresIn: '48hr'});
}

module.exports = jwtGenerator;