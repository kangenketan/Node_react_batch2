console.log("Nomor 1 Hitung Bangun Datar")

function HitungPersegi(sisi){
    function luas (s){return s*s}
    function keliling (s){return 4*s}
    console.log("LuasPersegi:", luas(sisi))
    console.log("KelilingPersegi:", keliling(sisi))
    console.log('-------------------------')
}
HitungPersegi(8)

function HitungPersegiPanjang(panjang,lebar){
    function luas (p,l){return p*l}
    function keliling (p,l){return 2*p + 2*l}
    console.log("LuasPersegiPanjang:", luas(panjang,lebar))
    console.log("KelilingPersegiPanjang:", keliling(panjang,lebar))
    console.log('-------------------------')
}
HitungPersegiPanjang(12,7)

console.log("Nomor 2 Hitung Bangun Ruang")

function HitungKubus(sisi){
    function volume (s){return s*s*s}
    function luas (s){return 6*s*s}
    console.log("VolumeKubus:", volume(sisi))
    console.log("LuasKubus:", luas(sisi))
    console.log('-------------------------')
}
HitungKubus(8)

function HitungBalok(panjang,lebar,tinggi){
    function volume (p,l,t){return p*l*t}
    function luas (p,l,t){return 2 * ((p*l)+(p*t)+(l*t))}
    console.log("VolumeBalok:", volume(panjang,lebar,tinggi))
    console.log("LuasBalok:", luas(panjang,lebar,tinggi))
    console.log('-------------------------')
}
HitungBalok(12,7,5)

console.log("Nomor 3 Urutkan Data")

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

people.sort((a,b)=> a.age-b.age);
people.forEach(function(item,index){
    console.log((index+1)+". "+item.name);
})

console.log("Nomor 4 Filter dan munculkan data")

var phones=[
  {name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"]},
  {name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"]},
  {name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"]},
  {name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"]},
  {name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"]},
]
let filterPhones=phones.filter(phone => phone.colors.includes("black"));
filterPhones.sort((a,b)=> a.year-b.year);
filterPhones.forEach(function(item,index){
    console.log((index+1)+". "+item.name+ ", " +"colors available: " + item.colors);
})

