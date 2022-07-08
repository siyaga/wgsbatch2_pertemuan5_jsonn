// const validator = require('validator');
// const fs = require('fs');
// const readline = require('readline');
const { questions,saveIsiData } = require('./contact') ;
const main = async() => {
    // menambahkan beberapa pertanyaan
    const name = await questions('What is your name : ');
    const mobile = await questions('What is your mobile number : ');
    const email = await questions('What is your email : ');
    

    saveIsiData(name,mobile,email);
    
 
};
main();
 