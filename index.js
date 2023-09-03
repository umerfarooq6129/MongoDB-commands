// commands 

// to create database
use umerdatabase 

// to create collections
db.umerdatabase.insertOne({name: 'umer',age: 1})

// to show databases
show dbs

// to check current database
db // just type db and this will show you current db name

// to find data in databases
db.umerdatabase.findOne();

// to insert multiple documents
db.umerdatabase.insertMany({ }, { }, { }, { });

//  to show collections
show collections

// to find data in collections
db.umerdatabase.find();

// to find specific data in collections
db.umerdatabase.find({name: 'umer'})

// to update data in collection
db.umerdatabase.update({name: 'umer'}, {$set:{type:"khan"}}) // set mean to what data you wanna update

// to delete data in collection
db.umerdatabase.delete({name: 'umer'})

//to delete all data in collection

db.umerdatabase.deleteMany({})