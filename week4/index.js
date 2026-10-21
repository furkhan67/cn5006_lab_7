const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://admin:admin@cluster0.w2fe8sa.mongodb.net/new';

const PersonSchema = new mongoose.Schema({name: {type: String,required: true},age: Number,gender: String,salary: Number});

const Person = mongoose.model('modelname',PersonSchema,'personCollection');

async function insertOne() {const doc1 = new Person({name: 'NHQ',age: 32,gender: 'Male',salary: 1234}); const savedDoc = await doc1.save();console.log('One document inserted');console.log(savedDoc);}

async function main() {
    
    try {await mongoose.connect(MONGO_URI);console.log(`Connected to ${MONGO_URI}`); await insertOne();} 
    catch (err) {console.error('Error:', err);} 
    finally {await mongoose.connection.close();console.log('Connection closed');}}main();