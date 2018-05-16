const cfg                   = require('config');
const User                  = require('../models/users/User');

class TokenStrategy {
    constructor(){
        this.verifyAuth = this.verifyAuth.bind(this);
    }

    async verifyAuth(jwtPayload, done) {
        const user = new User();
        try{
            await user.load(jwtPayload.sub, 'userName');
            return done(null, user);
        } catch (err) {
            return done(err, false);
        }
    }
}

module.exports = new TokenStrategy();