// Fungsi klasifikasi usia
function klasifikasiUsia(usia) { 
  if (usia >= 0 && usia <= 12) {
    return "Anak-anak";
  } else if (usia >= 13 && usia <= 17) {
    return "Remaja";
  } else if (usia >= 18 && usia <= 59) {
    return "Dewasa";
  } else if (usia >= 60) {
    return "Lansia";
  } else {
    return "Usia tidak valid";
  }
}

// Fungsi input dan proses
function prosesInputUsia() {
    // variable seluruh usia
  let jumlahAnak = 0;
  let jumlahRemaja = 0;
  let jumlahDewasa = 0;
  let jumlahLansia = 0;

    // Perulangan untuk input dan proses
  let lanjutInput = true;
  while (lanjutInput) {

      // input usia
    const prompt = require('prompt-sync')({
      autocomplete: ['selesai', 'tutup', 'exit'],
      sigint: true
    });
    const inputUsia = prompt("Masukkan usia (atau ketik 'selesai' untuk mengakhiri):");

    if (inputUsia === null || inputUsia.toLowerCase() === "selesai") {

        // menghentikan input dan menampilkan hasil
      lanjutInput = false;
    } else {
      const usia = parseInt(inputUsia);

        // Jika usia tidak nan dan berupa nilai angka
      if (!isNaN(usia)) {
        const kategori = klasifikasiUsia(usia);

        // tampilkan usia yang di input beserta kategorinya
        console.log(`Usia ${usia} termasuk kategori: ${kategori}`);
        
        // simpan nilai ke dalam variable sesuai kategori
        if (kategori === "Anak-anak") {
          jumlahAnak++;
        } else if (kategori === "Remaja") {
          jumlahRemaja++;
        } else if (kategori === "Dewasa") {
          jumlahDewasa++;
        } else if (kategori === "Lansia") {
          jumlahLansia++;
        }
      } else {
        
          // jika input bukan angka dan bukan string "selesai"
        alert("Input usia tidak valid. Harap masukkan angka.");
      }
    }
  }

    // Output hasil
  console.log("\n--- Hasil Klasifikasi Usia ---");
  
  if(jumlahAnak > 0){
    console.log(`Anak-anak : ${jumlahAnak} orang`);
  }
  if(jumlahRemaja > 0){
    console.log(`Remaja : ${jumlahRemaja} orang`);
  }
  if(jumlahDewasa > 0){
    console.log(`Dewasa : ${jumlahDewasa} orang`);
  }
  if(jumlahLansia > 0){
    console.log(`Lansia : ${jumlahLansia} orang`);
  }
}

// Panggil fungsi untuk memulai proses input usia
prosesInputUsia();