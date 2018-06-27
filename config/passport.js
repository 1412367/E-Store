var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    })
})

passport.use('Local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
    req.checkBody('email', 'Email không hợp lệ').notEmpty().isEmail();
    req.checkBody('password', 'Mật khẩu không hợp lệ.').notEmpty().isLength({min:4});
    var errors = req.validationErrors();
    
    if (errors) {
        var messages = [];
        errors.forEach(function(error) {
            messages.push(error.msg);
        })
        return done(null, false, req.flash('error', messages));
    }

    User.findOne({'email': email}, function(err, user) {
        if (err) {
            return done(err); 
        }
        if (user) {
            return done(null, false, req.flash('error','Email đã được đăng ký.'))
        }
        var newUser = new User();
        newUser.name = req.body.name;
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.save(function(err, result) {
            if (err) {
                return done(err);
            }
            return done(null, newUser, req.flash('success','Đăng ký thành công.'))
        })
    })
}));

passport.use('Local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
    req.checkBody('email', 'Email không hợp lệ').notEmpty().isEmail();
    req.checkBody('password', 'Mật khẩu không hợp lệ.').notEmpty().isLength({min:4});
    var errors = req.validationErrors();
    
    if (errors) {
        var messages = [];
        errors.forEach(function(error) {
            messages.push(error.msg);
        })
        return done(null, false, req.flash('error', messages));
    }

    User.findOne({'email': email}, function(err, user) {
        if (err) {
            return done(err); 
        }
        if (!user) {
            return done(null, false, req.flash('error','Sai email hoặc mật khẩu.'))
        }
        if (!user.validPassword(password)) {
            return done(null, false, req.flash('error','Sai email hoặc mật khẩu.'))
        }
        return done(null, user, req.flash('success','Đăng nhập thành công.'))
    })
}));