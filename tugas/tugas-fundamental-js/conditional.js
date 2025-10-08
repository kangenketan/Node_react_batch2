var kata1 = "Saya"
var kata2 = "Sangat"
var kata3 = "Senang"
var kata4 = "Sekali"
var kata5 = "Belajar"
var kata6 = "Programming"
var kata7 = "dan"
var kata8 = "Saya"
var kata9 = "Juga"
var kata10 = "Senang"
var kata11 = "Belajar"
var kata12 = "Javascript"

const sentence = kata1 + " " + kata2 + " " + kata3 + " " + kata4 + " " + kata5 + " " + kata6 + " " + kata7 + " " + kata8 +" " + kata9 +" " + kata10 +" " + kata11 +" " + kata12 + "."
var length = sentence.length;
var kategori;

if (length < 10){
    kategori = "Pendek";
}
else if (length >= 10 && length <= 30){
    kategori = "Sedang";
} else {
    kategori = "Panjang";
}
console.log("Panjang String:", length);
console.log("Kategori:", kategori);
