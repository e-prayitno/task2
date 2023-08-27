//STRING
//MANIPULASI STRING

let nami = "Eko Prayitno"
let loveJS = "Love Javascript"
console.log("-----------------")
console.log("MANIPULASI STRING")
console.log("-----------------")
//nomor 1
console.log("Nama           : " + nami)

//nomor 2
console.log("Jumlah String  : " + nami.length)

//nomor 3
let upperName = nami.toUpperCase()
console.log("Huruf Besar    : " + upperName)

//nomor 4
let lowerName = nami.toLowerCase()
console.log("Huruf Kecil    : " + lowerName)

//nomor 5
console.log("Huruf Pertama  : "+ nami[0]);

//nomor 6
console.log("Nama Pertama   : " + nami.substring(0,4));

//nomor 7
console.log(nami.substring(0,4) + loveJS);

//nomor 8
console.log("Huruf Terakhir : " + nami.substring(11,12));

console.log("")
console.log("------------------")
console.log("MENGUBAH TIPE DATA")
console.log("------------------")

//nomor 2
let age = "35"
let ageToInt = parseInt(age)
console.log("Ubah String to Number : ")
console.log(ageToInt)
console.log("Tipe data ==>> " + typeof ageToInt)
console.log("")

//nomor 4
let height = "167.9"
let heightToFloat = parseFloat(height)
console.log("Ubah String to Float : ")
console.log(heightToFloat)
console.log("Tipe data ==>> " + typeof heightToFloat)
console.log("")

