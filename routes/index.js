var express = require('express')

var db = require('../db')

const path = require('path')

module.exports = {
  displayHome
}

// function get (req, res) {
//   db.getUsers()
//     .then(function (users) {
//       res.render('index', { users: users })
//     })
//     .catch(function (err) {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// }

function displayHome (req, res) {
  var testData = {organisationName: "Fraser High School"}
  res.render('studentlogin', testData)
}
