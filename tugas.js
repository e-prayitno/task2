//STRING
//MANIPULASI STRING
console.log("------STRING-----")
console.log("-----------------")
console.log("MANIPULASI STRING")
console.log("-----------------")
let nami = "Eko Prayitno"
let loveJS = "Love Javascript"
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
console.log("Huruf Terakhir : " +nami[nami.length-1]);

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

// PENGECEKAN TIPE DATA
console.log("--------------------")
console.log("PENGECEKAN TIPE DATA");
console.log("--------------------")
let student = {
    name : "Eko",
    age : 35,
    manGender : true,

}
console.log(student.name + " adalah tipe data : " + typeof(student.name))
console.log(student.age + " adalah tipe data : " + typeof(student.age))
console.log(student.manGender + " adalah tipe data : " + typeof(student.manGender))


// NUMBER
// PENJUMLAHAN DAN PENGURANGAN
console.log(" ")
console.log(" ")
console.log("----------NUMBER-----------")
console.log("---------------------------")
console.log("PENJUMLAHAN DAN PENGURANGAN")
console.log("---------------------------")


let angka = {
    n1 : 10,
    n2 : 5,
    n3 : 6,   
    n4 : 2,
    n5 : 7,
    base : 3,
    exp : 4,
    array : [5, 8, 12, 4, 6]
}
console.log("Hasil dari : " + angka.n1 + " + " + angka.n2 + " = " + (angka.n1 + angka.n2))
console.log("Hasil dari : " + angka.n1 + " - " + angka.n2 + " = "+(angka.n1 - angka.n2))

// PERKALIAN DAN PEMBAGIAN
console.log(" ")
console.log("-----------------------")
console.log("PERKALIAN DAN PEMBAGIAN")
console.log("-----------------------")
console.log("Hasil dari : " + angka.n3 + " x " + angka.n4 + " = " + (angka.n3 * angka.n4))
console.log("Hasil dari : " + angka.n3 + " / " + angka.n4 + " = "+ (angka.n3 / angka.n4))

// PANGKAT BILANGAN
console.log(" ")
console.log("----------------")
console.log("PANGKAT BILANGAN")
console.log("----------------")
console.log("Hasil dari : " + angka.base + " ^ " + angka.exp + " = " + Math.pow(angka.base, angka.exp))

// RATA-RATA DARI ARRAY
console.log(" ")
console.log("--------------------")
console.log("RATA-RATA DARI ARRAY")
console.log("--------------------")
let total = angka.array.reduce((a, b) => a + b)/angka.array.length
console.log("Rata-rata dari : " + angka.array + " " + "adalah : " + total)


// BILANGAN GANJIL ATAU GENAP
console.log(" ")
console.log("--------------------------")
console.log("BILANGAN GANJIL ATAU GENAP")
console.log("--------------------------")

if (angka.n5 % 2 != 0){
    console.log("Angka "+angka.n5 +" " + "adalah bilangan ganjil")
}else{
    console.log("Angka "+angka.n5 +" "+ "adalah bilangan genap")
}

// RANDOM
console.log(" ")
console.log("------")
console.log("RANDOM")
console.log("------")
console.log("Angka acak dari 1 - 5 adalah : ")
console.log(Math.floor(Math.random() * 5))