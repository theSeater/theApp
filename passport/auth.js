const cfg                   = require('config');

const LocalStrategy         = require('passport-local').Strategy;
const JwtStrategy           = require('passport-jwt').Strategy;
const FacebookStrategy      = require('passport-facebook').Strategy;
const GoogleStrategy        = require('passport-google-oauth20').Strategy;

const SigningStrategy       = require('./SigningStrategy');

const ExtractJwt            = require('passport-jwt').ExtractJwt;

module.exports = (passport) => {
    
    passport.use('local-login', new LocalStrategy({
            usernName: 'email',
            passWord: 'password',
            passReqToCallback: false   
        },
        SigningStrategy.login
    ));
    
    passport.use('local-signup', new LocalStrategy({
        usernName: 'email',
        passWord: 'password',
        passReqToCallback: false   
    },
    SigningStrategy.signup
));
}

module.exports.verifyAuth = (passport) => passport.authenticate('jwt', {session: false});