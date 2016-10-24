# PatientApp
MEAN stack web application where you can Enter Patient Details  , see all available Details and filter them by name


1)  A patient entry screen with fields like firstname, lastname, age, dob, gender (dropdown), phone, free text information.
Validation of all this data is implemented in angular Js, just like input for age must contains number, phone input must have 10 digits in indian
Mobile number format, All text information must be certain character in length.

2) After that data is passed to NodeJs where by using mongoose , i create one schema to save record in mongodb. Json Data from all input has been
created and after that it is stored in MongoDB collection.

3) To run this App , Firstly you must have 'patient' db in MongoDB with collection name 'patient details'.
  
   After that run server.js from command prompt and hit URL : http://localhost:3000/
   
   
   
