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
        if (req.body.role)
            newUser.role = req.body.role;
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
        if (user.blocked) {
            return done(null, false, req.flash('error','Tài khoản đã bị khóa.'))
        }
        return done(null, user, req.flash('success','Đăng nhập thành công.'))
    })
}));

passport.use('Local.changepassword', new LocalStrategy({
    passReqToCallback: true
}, function(req, done) {
    console.log('got in')
    req.checkBody('oldpassword', 'Mật khẩu không hợp lệ (min 4 ký tự).').notEmpty().isLength({min:4});
    req.checkBody('newpassword', 'Mật khẩu không hợp lệ (min 4 ký tự).').notEmpty().isLength({min:4});
    var errors = req.validationErrors();
    
    if (errors) {
        var messages = [];
        errors.forEach(function(error) {
            messages.push(error.msg);
        })
        return done(null, false, req.flash('error', messages));
    }

    User.findOne({'email': req.user.email}, function(err, user) {
        if (err) {
            return done(err); 
        }
        if (!user.validPassword(req.body.oldpassword)) {
            return done(null, false, req.flash('error','Sai mật khẩu.'))
        }
        if (req.body.newpassword != req.body.confirmnewpassword) {
            return done(null, false, req.flash('error','Nhập lại mật khẩu không đúng.'))
        }
        user.password = user.encryptPassword(req.body.newpassword);
        user.save(function (err) {
            if (err) return handleError(err);
            return done(null, user, req.flash('success','Cập nhật mật khẩu thành công.'))
        });
    })
}));