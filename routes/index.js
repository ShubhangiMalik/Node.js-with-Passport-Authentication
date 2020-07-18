const express = require('express');
const router = express.Router();
const path = require('path')
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);


router.get('/index2', ensureAuthenticated,(req, res) => {
  res.render('index2');
});

router.get('/news', ensureAuthenticated,(req, res) =>{
  res.render('news');
});

router.get('/news2', ensureAuthenticated,(req, res)=> {
  res.render('news2');
});

router.get('/news3', ensureAuthenticated,(req, res) =>{
  res.render('news3');
});

router.get('/news4', ensureAuthenticated,(req, res) => {
  res.render('news4');
});

router.get('/news5', ensureAuthenticated, (req, res)=> {
  res.render('news5');
});

module.exports = router;