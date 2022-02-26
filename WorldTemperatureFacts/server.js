const express = require('express')
const bodyParser = require('body-parser');
const request = require('request');
const app = express()
const myKey = "";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {userweather: null, error: null});
//   res.render('index', {userLocation: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${myKey}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {userweather: null, error: 'Error, please try again'});
    } else {
      let userweather = JSON.parse(body)
      if(userweather.main == undefined){
          console.log("Error");
        res.render('index', {userweather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `${userweather.main.temp} degrees`;
        res.render('index', {userweather: weatherText, error: null});
      }
    }
  });

//   request(url, function (err, response, body) {
//     if(err){
//       res.render('index', {userLocation: null, error: 'Error, please try again'});
//     } else {
//       let userLocation = JSON.parse(body)
//       if(userLocation.main == undefined){
//         res.render('index', {userLocation: null, error: 'Error, please try again'});
//       } else {
//         let userLocationText = `${userLocation.name}!`;
//         res.render('index', {userLocation: userLocationText, error: null});
//       }
//     }
//   });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})