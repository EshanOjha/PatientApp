var mongoose = require('mongoose');

// Patient Schema
var patientSchema = mongoose.Schema({
	firstName:{
		type: String,
	},
	lastName:{
		type: String,
	},
	age:{
		type: Number,
	},
    
	gender:{
		type: String,
	},
    
    phoneNumber:{
        type:Number,
    },
    
    description:{
		type: String,
	}
    
	
});

var patient = module.exports = mongoose.model('Patient',patientSchema,'patientDetails');


// Add Patient
module.exports.addPatient = function(Patient, callback){
	patient.create(Patient, callback);
}

// Get allPatient
module.exports.getPatients = function(callback, limit){
	patient.find(callback).limit(limit);
}
