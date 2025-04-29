//fungsi tambah
function tambah(a, b) {
  return a + b;
}
//fungsi kurang
function kurang(a, b) {
  return a - b;
}
//fungsi kali
function kali(a, b) {
  return a * b;
}
//fungsi bagi
function bagi(a, b) {
  if (b === 0) {
    return "Tidak dapat dibagi dengan nol!";
  }
  return a / b;
}

function kalkulatorSederhana() {
    //define variable
  let pilihan;
  let angka1;
  let angka2;
  let hasil;

//perulangan untuk kalkulator 
do {
      //input pilihan operasi
      const prompt = require('prompt-sync')({
        autocomplete: ['selesai', 'tutup', 'exit'],
        sigint: true
      }); 
        console.log("Pilih nama operasi :");
        console.log("1. Penjumlahan");
        console.log("2. Pengurangan");
        console.log("3. Perkalian");
        console.log("4. Pembagian");
        console.log("5. Keluar\n");
       pilihan = prompt("Ketikkan pilihan operasi : ").trim().toLowerCase().replace(/\s/g, '');

    //switch case untuk pilih operasi
    switch (pilihan.toLowerCase()) {
      case "penjumlahan":

          //input variable
        angka1 = parseFloat(prompt("Angka 1 : "));
        angka2 = parseFloat(prompt("Angka 2 : "));

        //pengecekan variable
        if (!isNaN(angka1) && !isNaN(angka2)) {

            //memanggil fungsi tambah
          hasil = tambah(angka1, angka2);

          //menampilkan hasil operasi
          console.log(`\nOperasi : Penjumlahan\nAngka 1 : ${angka1}\nAngka 2 : ${angka2}\nHasil : ${hasil} \n`);
        } else {
          console.log("Input tidak valid. Harap masukkan angka.");
        }
        break;
      case "pengurangan":

          //input variable
        angka1 = parseFloat(prompt("Angka 1 : "));
        angka2 = parseFloat(prompt("Angka 2 : "));

        //pengecekan variable
        if (!isNaN(angka1) && !isNaN(angka2)) {

            //memanggil fungsi kurang
          hasil = kurang(angka1, angka2);

          //menampilkan hasil operasi
          console.log(`\nOperasi : Pengurangan\nAngka 1 : ${angka1}\nAngka 2 : ${angka2}\nHasil : ${hasil} \n`);
        } else {
          console.log("Input tidak valid. Harap masukkan angka.");
        }
        break;
      case "perkalian":

        //input variable
        angka1 = parseFloat(prompt("Angka 1 : "));
        angka2 = parseFloat(prompt("Angka 2 : "));

        //pengecekan variable
        if (!isNaN(angka1) && !isNaN(angka2)) {

            //memanggil fungsi kali

          hasil = kali(angka1, angka2);

            //menampilkan hasil operasi
          console.log(`\nOperasi : Perkalian\nAngka 1 : ${angka1}\nAngka 2 : ${angka2}\nHasil:  ${hasil} \n`);
        } else {
          console.log("Input tidak valid. Harap masukkan angka.");
        }
        break;
      case "pembagian":

          //input variable
        angka1 = parseFloat(prompt("Angka 1 : "));
        angka2 = parseFloat(prompt("Angka 2 : "));

        //pengecekan variable
        if (!isNaN(angka1) && !isNaN(angka2)) {

            //memanggil fungsi bagi
          hasil = bagi(angka1, angka2);
          
          //menampilkan hasil operasi
          console.log(`\nOperasi : Pembagian\nAngka 1 : ${angka1}\nAngka 2 : ${angka2}\nHasil : ${hasil} \n`);
        } else {
          console.log("Input tidak valid. Harap masukkan angka.");
        }
        break;
      case "keluar":
        console.log("Terima kasih telah menggunakan kalkulator ini!\n\n");
        return;
        break;
        default:
            console.log('Pilihan tidak valid.');
    }
    //kondisi untuk menghentikan aplikasi
  } while (true);
}

// Jalankan kalkulator
kalkulatorSederhana();