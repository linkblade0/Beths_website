var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('../models/user.js');


//test endpoint to check if users are being stored successfully
router.get('/people', function(req, res) {
  var query = req.query.status ? {status: req.query.status} : {}
  User.find(query, function(err, users) {
    return res.send(users);
  })
})

router.get('/status', function(req, res) {
  if(!req.isAuthenticated()) {
    return res.status(200).json({
      status: false
    });
  }
  res.status(200).json({
    status: true
  })
})


router.post('/register', function(req, res, next) {
  User.register(new User({
      username: req.body.username,
      name: {
        firstName: req.body.name.firstName,
        lastName: req.body.name.lastName
      },
      email: req.body.email,
      number: req.body.number,
      address: {
        street: req.body.address.street,
        city: req.body.address.city,
        state: req.body.address.state,
        zip: req.body.address.zip
      }
    }),
    req.body.password, function(err, account) {
    if (err) {
      return res.status(500).json({
        err: err
      });
    }
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({
        status: 'Registration successful!'
      });
    });
  });
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
        err: info
      };

    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      res.status(200).json({
        
        status: 'Login successful!'
      });
    })
  })(req, res, next);
})


router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});


module.exports = router;
