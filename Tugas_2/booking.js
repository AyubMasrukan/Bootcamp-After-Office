const supertest = require('supertest'); //untuk kirim http request
const chai = require('chai'); 
const expect = chai.expect; //untuk assertion/memeriksa hasil test
const fs = require('fs'); //untuk baca file dari local
require('dotenv').config(); //mengambil token dari authHelper
const { getToken } = require('./utils/authHelper');

const api = supertest('https://restful-booker.herokuapp.com'); //Membuat objek api yang mengarah ke URL API Restful Booker.

let bookingId; //variable global untuk menyimpan id yang dibuat
let token; //untuk menyimpan token auth dari login
const bookingData = JSON.parse(fs.readFileSync('data/bookingData.json'));

describe('E2E API Booking Test', function () {
  this.timeout(10000); // Biar Mocha tunggu maksimal 10 detik

  it('create booking', async () => {
    const res = await api
      .post('/booking')
      .send(bookingData)
      .set('Accept', 'application/json');

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('bookingid');

    bookingId = res.body.bookingid; // Simpan ID untuk tes berikutnya
    console.log('Booking ID:', bookingId);
  });

  it('get booking', async () => {
    const res = await api
      .get(`/booking/${bookingId}`)
      .set('Accept', 'application/json');

    expect(res.status).to.equal(200);
    expect(res.body.firstname).to.equal(bookingData.firstname);
    expect(res.body.lastname).to.equal(bookingData.lastname);
  });

  it('delete booking', async () => {
    token = await getToken(); // Ambil token dari authHelper

    const res = await api
    .delete(`/booking/${bookingId}`)
    .set('Cookie', `token=${token}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Accept', 'application/json');
    
    expect(res.status).to.equal(201);
    console.log('Booking deleted');
  });
});
