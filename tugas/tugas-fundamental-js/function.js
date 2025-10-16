console.log("Nomor 1");
var john = introduce("John", "laki-laki", "penulis", "30");
console.log(john); // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

var sarah = introduce("Sarah", "perempuan", "model", "28");
console.log(sarah); // Menampilkan "Bu Sarah adalah seorang model yang berusia 28 tahun"
function introduce(nama, jenisKelamin, pekerjaan, umur) {
  let sapaan = "";

  if (jenisKelamin.toLowerCase() === "laki-laki") {
    sapaan = "Pak";
  } else if (jenisKelamin.toLowerCase() === "perempuan") {
    sapaan = "Bu";
  } else {
    sapaan = "";
  }

  return `${sapaan} ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`;
}
console.log("Nomor 2");
var text = "Super Bootcamp Fullstack Dev 2022";
function findUniqueCharacters(input) {
  let text = input.toLowerCase().replace(/\s/g, "");
  let frequency = {};
  for (let char of text) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  let result = "";
  for (let char of text) {
    if (frequency[char] === 1) {
      result += char;
    }
  }

  return result;
}
console.log(findUniqueCharacters(text));
console.log("Nomor 3");
var angka = [2, 3, 1, 9, 12, 8, 9, 7];
function cariTerbesarTerkecil(arr) {
  if (arr.length === 0) {
    return "Array kosong";
  }

  let terbesar = arr[0];
  let terkecil = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > terbesar) {
      terbesar = arr[i];
    }
    if (arr[i] < terkecil) {
      terkecil = arr[i];
    }
  }

  return `angka terbesar adalah ${terbesar} dan angka terkecil adalah ${terkecil}`;
}
console.log(cariTerbesarTerkecil(angka));
console.log("Nomor 4");
function arrangeString(str) {
  return str.split("").sort().join("");
}
console.log(arrangeString("bahasa"));
console.log(arrangeString("similikiti"));
console.log(arrangeString("sanbercode"));
console.log(arrangeString(`" "`));
console.log("Nomor 5");
function palindrome(kata) {
  let cleanKata = kata.replace(/\s+/g, "");
  let reversed = cleanKata.split("").reverse().join("");
  return cleanKata === reversed;
}

console.log(palindrome("katak"));
console.log(palindrome("blanket"));
console.log(palindrome("nababan"));
console.log(palindrome("haji ijah"));
console.log(palindrome("mister"));
console.log("Nomor 6");
function angkaPalindrome(num) {
  function isPalindrome(n) {
    let str = n.toString();
    let reversed = str.split("").reverse().join("");
    return str === reversed;
  }

  num++;
  while (!isPalindrome(num)) {
    num++;
  }
  return num;
}

console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000));
console.log("Nomor 7");
function cekPermutasi(str1, str2) {
  const s1 = str1.replace(/\s/g, "");
  const s2 = str2.replace(/\s/g, "");

  if (s1.length !== s2.length) return false;

  const sortedStr1 = s1.split("").sort().join("");
  const sortedStr2 = s2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}
console.log(cekPermutasi("abah", "baha"));
console.log(cekPermutasi("ondel", "delon"));
console.log(cekPermutasi("paul sernine", "arsene lupin"));
console.log(cekPermutasi("taco", "taca"));
