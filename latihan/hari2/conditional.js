if (true) {
    console.log

}
var minimarketStatus = "open"
var telur = "soldout"
var buah = "soldout"
if (minimarketStatus == "open") {
    console.log("saya akan membeli telur dan buah")
    if(telur == "soldout"|| buah == "soldout") {
        console.log("belanjaan saya tidak lengkap")
    } else if(telur == "soldout") {
        console.log("telur habis")
    } else if (buah == "soldout") {
        console.log("buah habis")
    }
}else {
        console.log("minimarket tutup, saya pulang lagi")
    }

    var buttonPushed = 1;
    switch(buttonPushed) {
        case 1: { console.log('matikan TV!'); break; }
        case 2: { console.log('turunkan volume TV!'); break; }
        case 3: { console.log('tingkatkan volume TV!'); break; }
        case 4: { console.log('matikan suara TV!'); break; }
        default: { console.log('Tidak terjadi apa-apa'); }
    }
    // tanpa ternary operator
    var age = 20
    var bisaVote = ""
    if (age > 20){
        bisaVote = "bisa vote"
    }else{
        bisaVote = "belum bisa vote"
    }
    console.log(bisaVote)

   // dengan ternary Operator
   var age= 20
   var bisaVote= age > 20 ? "bisa vote" : "belum bisa vote" // hasilnya belum bisa vote
   console.log(bisaVote)

   var jumlah