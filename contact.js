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

  const main = async() => {
    // menambahkan beberapa pertanyaan
    const name = await questions('What is your name : ');
    const mobile = await questions('What is your mobile number : ');
    const email = await questions('What is your email : ')

    const contact = {name, mobile};
      // Validasi Memeriksa Folder dan File
    periksaFolder();
    periksaFile();
   
    // Memasukan Data ke dalama array contacts.json
    memasukanIsiData(contact);
    rl.close();
 
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

const memasukanIsiData = (contact) => {
const file = fs.readFileSync('data/contacts.json', 'utf8');
const contacts =JSON.parse(file);
contacts.push(contact);
fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
console.log("Terima Kasih sudah memasukkan data!");
}

main();

module.exports = {main};