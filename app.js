const validator = require('validator');
const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// console.log(validator.isEmail('riyantogmail.com'));
// console.log(validator.isMobilePhone('551232924815', 'id-ID'));


// function validasiEmail(){
//     rl.question('what your Email? ', (email)=> {
//         if(!validator.isEmail(email)){
//             console.log('Email Salah !!');
//             return inputEmail;
    
//         } else {

//         }
//     })
// }
// //Membuat variabel global
// let namaSaya, emailSaya, nomorSaya;

// //Membuat Pertanyaan dan memasukan validasi
// rl.question('What your name? ',(name) => {   
//     namaSaya = name;
//     validasiEmail();
// });

    
//     //Membuat Validasi Email
//     const validasiEmail = ()=>{
//         rl.question('What your Email? ', (email)=> {
//             if(!validator.isEmail(email)){
//                 console.log('Email Salah !!');
//                 validasiEmail();
//             } else {
//                 //memasukan email ke email global
//                 emailSaya = email
//                 validasiNoHP();
//             }
//     });
// }

 
    
//     //Membuat Validasi noHP
//     const validasiNoHP = ()=>{
//         rl.question('what your number phone? ',(nohp)=> {
        
//             if(!validator.isMobilePhone(nohp)){
//                 console.log('Number phone Salah !!');
//                 validasiNoHP();
//             }else {
//                 //Memasukan Data Ke variabel nomorsaya
//                 nomorSaya = nohp;
//                 //menampilkan seluruh data
//                 console.log(`Hatur Thank You ${namaSaya}, Your Number is ${nomorSaya}, Your Email is ${emailSaya} `);
                
//                 rl.close();
                
//             }
//         });
//     }


    // Membuat fungsi pertanyaan untuk menambahkan data array
    const pertanyaan = () => {

    
    rl.question('What your name? ',(name) => {   
        rl.question('What your number? ', (mobile)=> {
            const contact = {name, mobile};
            const file = fs.readFileSync('data/contacts.json', 'utf8');
            const contacts =JSON.parse(file);
            contacts.push(contact);
            fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
            console.log("Terima Kasih sudah memasukkan data!");
            rl.close();
         
    });
    });
}
        
pertanyaan();
 