const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i = 1;
console.log("=== PROGRAM MELIHAT DAN MENAMBAH DATA MAHASISWA ===");
while (i == 1) {
  console.log("Silahkan memilih salah satu program dibawah ini!");
  console.log("1. Melihat data mahasiswa");
  console.log("2. Menambah data mahasiswa");

  rl.question("Masukkan pilihan anda: ", (data) => {
    console.log(`Anda memilih ${data}\n`);
    if (data == "1") {
      const file = fs.readFileSync("latihan/data/mahasiswa.json", "utf-8");
      const mahasiswa = JSON.parse(file);
      console.log(mahasiswa);
      rl.close();
    } else if (data == "2") {
      rl.question("Masukkan nama mahasiswa: ", (name) => {
        rl.question("Masukkan nim mahasiswa: ", (nim) => {
          rl.question("Masukkan jurusan mahasiswa: ", (major) => {
            const data = {
              nama: name,
              nim: nim,
              jurusan: major,
            };
            const file = fs.readFileSync(
              "latihan/data/mahasiswa.json",
              "utf-8"
            );
            const mahasiswa = JSON.parse(file);
            mahasiswa.push(data);
            fs.writeFileSync(
              "latihan/data/mahasiswa.json",
              JSON.stringify(mahasiswa)
            );
            rl.close();
          });
        });
      });
    }
  });
  i = 0;
}
