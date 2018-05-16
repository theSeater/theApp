const cfg = require('config');
const jwt = require('jsonwebtoken');
const moment = require('moment');

module.exports = {
    generateToken(user) {
        const expires = moment().add(60, 'days');
    
        const token = jwt.sign({
            sub: user.data._id,
            exp: expires
        }, 'Ax34g31aC');
        return token;
    }
}