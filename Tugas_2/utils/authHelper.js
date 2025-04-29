const supertest = require('supertest'); //untuk kirim http request
require('dotenv').config(); //Library untuk membaca file .env agar bisa menggunakan variable environment (process.env.VALID_USER dan process.env.VALID_PASS)

const api = supertest('https://restful-booker.herokuapp.com'); //Membuat objek api yang mengarah ke URL API Restful Booker.

//Membuat fungsi getToken asynchronous untuk mendapatkan token autentikasi dari API /auth
async function getToken() {

  //Mengambil username dan password dari file .env.
  const username = process.env.VALID_USER; 
  const password = process.env.VALID_PASS;

  //Mengecek apakah username atau password kosong.
  if (!username || !password) {
    throw new Error('Username atau Password dari ENV tidak ditemukan!');
  }

  const res = await api
    .post('/auth') //elakukan HTTP POST ke endpoint /auth
    .send({ username, password }) //mengirimkan username dan password dalam body request
    .set('Accept', 'application/json'); //menambahkan header Accept: application/json supaya server tahu kita mau menerima balasan format JSON
    console.log("Token : ", res.body.token); //menampilkan token

  return res.body.token; //engambil token dari response (res.body.token) dan mengembalikannya
}

//export fungsi getToken supaya bisa dipakai di file lain
module.exports = { getToken };

