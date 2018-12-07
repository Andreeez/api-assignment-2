var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const request = require('request')
const fs = require('fs');

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('stylesheets'));

app.get("/", (req,response) => response.render('index')
);


app.post('/', (req, res) => {
        let cityname = req.body.cityname
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&APPID=dd7f108b55203dc85f6f67070b0ca04e`;
        
        request.post(url, (error, response, body) => {
            let json = JSON.parse(body);
            console.log(json);
            
            let weather = json;
            console.log(weather.main.temp);
            res.render('index', {temp: weather.main.temp, city: weather.name})
            
        });

    
        });


    app.listen(3000, listening);
    function listening(){
       console.log("listening . . .");
    }