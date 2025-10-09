console.log("CALLBACK")
function periksaDokter(nomorAntri, callback) {
    if(nomorAntri>5){
        callback(false)
    }else{
        callback(true)
    }
}
periksaDokter(6, function(check){
    if (check){
        console.log("Sebentar Lagi Giliran Saya")
    }else{
        console.log("Saya Jalan-jalan Dulu")
    }
})

function periksaAntrianDokter(nomorAntri, callback){
    console.log(`sekarang antrian ke-${nomorAntri}`)
    setTimeout(function(){
        if(nomorAntri===10){
            console.log("saya masuk ruangan dokter")
            callback(0)
        }else{
            console.log("saya masih menunggu")
                callback(nomorAntri+1)
        }
    },1000)
}
periksaAntrianDokter(7, function(nomorAntriBaru){
    periksaAntrianDokter(nomorAntriBaru, function(nomorAntriBaru1){
    periksaAntrianDokter(nomorAntriBaru1, function(nomorAntriBaru2){
        periksaAntrianDokter(nomorAntriBaru2, function(nomorAntriBaru3){
            return nomorAntriBaru3
        })
    })
})
});