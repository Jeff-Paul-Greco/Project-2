let passport = require('passport');
let LocalStrategy = require('passport-local').strategy;

const db = require('../models');

passport.use(new LocalStrategy({

    username: "email"
}))