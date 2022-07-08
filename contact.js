const validator = require('validator');
const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = (ask) => {

    return new Promise((resolve,reject) => {
      rl.question(ask,(inputVariable) => {   
          resolve(inputVariable);
  
      });
    });  
  
  };

  




// Membuat fungsion periksaFolder
const periksaFolder = ()=> {
//Membuat folder data apabila tidak ada
const dirPath = './data';
if(!fs.existsSync(dirPath)){
fs.mkdirSync(dirPath);
}

}

//Membuat fungsi periksaFile
const periksaFile = ()=> {
// Membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
 fs.writeFileSync(dataPath,'[]','utf-8');
}
}
//Simpan Data
const saveIsiData = (name,mobile,email) => {
periksaFolder();
periksaFile();
const contact = {name, mobile, email};
const file = fs.readFileSync('data/contacts.json', 'utf8');
const contacts =JSON.parse(file);
contacts.push(contact);
fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
console.log("Terima Kasih sudah memasukkan data!");

rl.close();
}


module.exports = { questions,saveIsiData};