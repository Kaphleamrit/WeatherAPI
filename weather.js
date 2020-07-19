const express = require("express");
const https=require("https");
const bodyParser =require("body-Parser");
app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.listen(300,function(){
	console.log("Server started at port 300");
});


app.get("/" , function(req,res){
res.sendFile(__dirname + "/index.html");
});



app.post("/" , function(req,res){

	const key="a6a24cd57415f82b3946eecd7b95cd40";
const city=req.body.CityName;

	const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID="+key +;


https.get(url , function(response){

response.on("data" , function(data) {

   var weatherData = JSON.parse(data);

const desc=(weatherData.weather[0].description);
const temp = (weatherData.main.temp);
const icon = weatherData.weather[0].icon;

const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";

res.write("<h1>The tempreture of " +city +"  at current time is"+temp + "deg and its "
	+ desc+"</h1>");
res.write("<img src = "+imageURL+">");

res.send();
});
});


});
