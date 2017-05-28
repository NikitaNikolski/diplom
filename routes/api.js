const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

const myPythonScriptPath = '../detect_barcode.py';
const PythonShell = require('python-shell');

/* GET api listing. */
router.get('/', (req, res) => { 
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.get('/barcode-python', (req, res) => {
  let options = {
    scriptPath: '../',
    args: ['--image=src/assets/img/barcode_02.jpg']
  };

  console.log("Test");

  let pyshell = new PythonShell(myPythonScriptPath, options);

  pyshell.on('message', function (message) {
      // received a message sent from the Python script (a simple "print" statement)
      console.log(message);
      res.json()
  });

  // end the input stream and allow the process to exit
  pyshell.end(function (err) {
      if (err){
          throw err;
      };

      console.log('finished');
  });

  res.send("Ok");
});

module.exports = router;