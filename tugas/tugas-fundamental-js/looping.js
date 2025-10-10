console.log("Nomor 1");

console.log("LOOPING PERTAMA");

var i = 1;
while (i <= 10) {
  var loop = i * 2;
  console.log(loop, "- I love coding");
  i++;
}

console.log("LOOPING KEDUA");

do {
  i--;
  var loop = i * 2;
  console.log(loop, "-  I will become a MERN Stack developer");
} while (i > 1);

console.log("Nomor 2");
var i = 1;
while (i <= 20) {
  if (i % 2 === 0) {
    console.log(i + " - Angka Genap");
  } else {
    console.log(i + " - Angka Ganjil");
  }
  i++;
}

console.log("Nomor 3");
for (let i = 1; i <= 20; i++) {
  // jika kelipatan 3
  if (i % 3 === 0) {
    if (i % 2 === 0) {
      console.log(i + " - ToT");
    } else {
      console.log(i + " - I Love Coding");
    }
  } else {
    // bukan kelipatan 3
    if (i % 2 === 0) {
      console.log(i + " - Berkualitas");
    } else {
      console.log(i + " - Santai");
    }
  }
}
console.log("Nomor 4");
const tinggi = 7;

for (let baris = 1; baris <= tinggi; baris++) {
  let barisPagar = "";
  for (let kol = 1; kol <= baris; kol++) {
    barisPagar += "#";
  }
  console.log(barisPagar);
}
console.log("Nomor 5");
var sentence = "Fullstack Developer";
HanyaKonsonan = function (str) {
  var consonant = "";
  for (let i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (!char.match(/[aiueo ]/)) {
      consonant += char;
    }
  }
  return consonant;
};
console.log(HanyaKonsonan(sentence));
