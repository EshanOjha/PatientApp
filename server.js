var express = require('express');

var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));

app.use(bodyParser.json());

var port = process.env.PORT || 3000;

patient =require('./models/patient');

mongoose.connect('mongodb://localhost/patient');
var db = mongoose.connection;


app.listen(port,function(){
   console.log('our app is running');
});


app.get('/', function(req, res){
   res.send('Please use /api/patient  or /api/allPatient');
});


app.post('/addPatient',function(req,res){
    var data=req.body;
   console.log('requeset reqache to node');
   // console.log(data);
    var finalData=[];
    finalData.push({
        firstName:data.firstName.$modelValue,
        lastName:data.lastName.$modelValue,
        age:data.age.$modelValue,
        gender:data.gender.$modelValue,
        phoneNumber:data.userPhoneNumber.$modelValue,
        description:data.txtDescription.$modelValue
    })
    //console.log(finalData);
    
        patient.addPatient(finalData, function(err,data){
		if(err){
			throw err;
		}
        res.json(data);
   });
});

app.get('/api/getAllPatients',function(req,res){
    console.log('inside list api');
        
  patient.getPatients(function(err,data){
       if(err){
           throw err;
       } 
        res.json(data);
    });
 
});

