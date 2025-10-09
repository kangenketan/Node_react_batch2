// Contoh 1
console.log("CONTOH 1")
function tampilkan(){
    console.log("halo!")
}
tampilkan()

// Contoh 2
console.log("CONTOH 2")
function tampilkanAngka(){
    return 2
}
var tampung = tampilkanAngka()
console.log(tampung)
    
// Contoh 3
console.log("CONTOH 3")
function kalikanDua(angka){
    return angka * 2
}
var tampung = kalikanDua(2,2)
console.log(tampung)

// Contoh 4
console.log("CONTOH 4")
function tampilkanAngka(angka1, angka2=2){
    return angka1 + angka2
}

console.log(tampilkanAngka(5,3))
console.log(tampilkanAngka(6))