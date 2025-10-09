console.log("Nomor 1 Arrow Function")
let r = 7;
const luasLingkaran = (r) => {
    const phi = 22/7;
    return phi*r*r;
};
const kelilingLingkaran = (r) =>  {
    const phi = 22/7;
    return 2*phi*r;
};
console.log("Luas Lingkaran:",luasLingkaran(r));
console.log("Keliling Lingkaran:",kelilingLingkaran(r));

console.log("Nomor 2 Membuat function introduce sesuai ES6")
const introduce = (...value) => {
    const [nama, umur, JenisKelamin, pekerjaan] = value
    if (JenisKelamin == "Laki-laki") {
        return`Pak ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun.`
    } else {
        return`Bu ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun.`
    }
}
const perkenalanJohn = introduce("john","30","Laki-laki","penulis")
console.log(perkenalanJohn)
const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru")
 console.log(perkenalanSarah)