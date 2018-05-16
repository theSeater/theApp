const cfg = require('config');
const generateToken = require('./Token').generateToken;

class SigningStrategy {
    constructor() {
        
    }

    async login(req, res, done) {
        return done (null, true);
    }

    async signup(req, res, done) {
        return done (null, true);
    }
}

module.exports = new SigningStrategy();