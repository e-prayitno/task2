//STRING
//MANIPULASI STRING
console.log("------STRING-----")
console.log("-----------------")
console.log("MANIPULASI STRING")
console.log("-----------------")
let nami = "Eko Prayitno"
let loveJS = "Love Javascript"

//function Nama
function n4me(nami){
    let result = nami
    return result
}
console.log("Nama           : " + n4me(nami));

//function jumlah string
function totalString(nami){
    let result = nami.length
    return result
}
console.log("Jumlah String  : " +totalString(nami));

//function upperCase
function upperCase(nami){
    let result = nami.toUpperCase()
    return result
}
console.log("Huruf Besar    : " +upperCase(nami));

//function lowerCase
function lowerCase(nami){
    let result = nami.toLowerCase()
    return result
}
console.log("Huruf Kecil    : " +lowerCase(nami));

// function firstletter
function firstLetter(nami){
    let result = nami[0]
    return result
}
console.log("Huruf Pertama  : "+ firstLetter(nami));

// function firstName
function firstName(nami){
    let result = nami.substring(0,4)
    return result
}
console.log("Nama Pertama   : " + firstName(nami));

// function loveJS
function lJS(nami){
    let result = nami.substring(0,4)
    let result1 = result + loveJS
    return result1
}
console.log(lJS(nami));

// function lastCase
function lastCase(nami){
    let result = nami[nami.length-1];
    return result
}
console.log("Huruf Terakhir : " +lastCase(nami));


console.log("")
console.log("------------------")
console.log("MENGUBAH TIPE DATA")
console.log("------------------")

//nomor toNumber
let age = "35"
function toNumber(age) { 
    let result = parseInt(age)
    console.log("Tipe data ==>> " + typeof result)
    return result
    
    
}
console.log("Ubah String to Number : " +toNumber(age));
console.log("");


//nomor toFloat
let height = "167.9"
function toFloat(height) { 
    let result = parseFloat(height)
    console.log("Tipe data ==>> " + typeof result)
    return result
}
console.log("Ubah String to Float : " +toFloat(height));
console.log("");
console.log("");

// PENGECEKAN TIPE DATA
console.log("--------------------")
console.log("PENGECEKAN TIPE DATA");
console.log("--------------------")
let student = {
    name : "Eko",
    age : 35,
    manGender : true,
}
function checkData(student) { 
    let result = student
    return result
}
console.log(student.name + " adalah tipe data : " + typeof checkData(student.name))
console.log(student.age + " adalah tipe data : " + typeof checkData(student.age))
console.log(student.manGender + " adalah tipe data : " + typeof checkData(student.manGender))


//NUMBER
//PENJUMLAHAN DAN PENGURANGAN
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
    n5 :7,
    base : 3,
    exp : 4,
    array : [5, 8, 12, 4, 6],
    rand: 5
}
function add(n1, n2) {
    let result = n1 + n2
    return result
}
console.log("Hasil dari : " + angka.n1 + " + " + angka.n2 + " = " + add(angka.n1,angka.n2));

function substrc(n1, n2) {
    let result = n1 - n2
    return result
}
console.log("Hasil dari : " + angka.n1 + " - " + angka.n2 + " = " + substrc(angka.n1,angka.n2));

//PERKALIAN DAN PEMBAGIAN
console.log(" ")
console.log("-----------------------")
console.log("PERKALIAN DAN PEMBAGIAN")
console.log("-----------------------")

function multiply(n3, n4) {
    let result = n3 * n4
    return result
}
console.log("Hasil dari : " + angka.n3 + " x " + angka.n4 + " = " + multiply(angka.n3, angka.n4))

function devide(n3, n4) {
    let result = n3 / n4
    return result
}
console.log("Hasil dari : " + angka.n3 + " / " + angka.n4 + " = "+ devide(angka.n3, angka.n4))

// PANGKAT BILANGAN
console.log(" ")
console.log("----------------")
console.log("PANGKAT BILANGAN")
console.log("----------------")

function pow(base, exp) {
    let result = base ** exp
    return result
}
console.log("Hasil dari : " + angka.base + " ^ " + angka.exp + " = " + pow(angka.base, angka.exp))

// RATA-RATA DARI ARRAY
console.log(" ")
console.log("--------------------")
console.log("RATA-RATA DARI ARRAY")
console.log("--------------------")

function avg(array) {
    let result = array.reduce((a,b) => a + b) / array.length
    return result
}
console.log("Rata-rata dari : " + angka.array + " " + "adalah : " + avg(angka.array));

// BILANGAN GANJIL ATAU GENAP
console.log(" ")
console.log("--------------------------")
console.log("BILANGAN GANJIL ATAU GENAP")
console.log("--------------------------")

function GG (n5){
    if (n5 % 2 != 0){
        console.log("Angka "+n5 +" " + "adalah bilangan ganjil")
    }else{
        console.log("Angka "+n5 +" "+ "adalah bilangan genap")
    } 
}
GG(angka.n5)

// RANDOM
console.log(" ")
console.log("------")
console.log("RANDOM")
console.log("------")

function ran(rand) { // angka random
    let result = Math.round(Math.floor(Math.random() * rand))
    return result
}
console.log("Angka acak dari 1 - 5 adalah : "+ ran(angka.rand));


// Fahrenheit
console.log(" ")
console.log("---------------------")
console.log("Celcius ke Fahrenheit")
console.log("---------------------")

let celcius = 100
function toFahr(celcius) {
    let result = (celcius * 9/5) + 32
    return result
}
console.log("Nilai dari "+ celcius + " derajat celcius ke Fahrenheit adalah " +toFahr(celcius));

console.log(" ")
console.log("---------------------")
console.log("Cek Huruf Vokal")
console.log("---------------------")

let letter = "p"
function vocal(letter) { // cek huruf vokal
    if (letter == "a" || letter == "i" || letter == "u" || letter == "e" || letter == "o") {
        console.log("Huruf "+ letter +" adalah huruf vokal");
    } else {
        console.log("Huruf "+ letter +" BUKAN huruf vokal");
    }
}
vocal(letter)

// (Rumus: Fahrenheit = (Celsius * 9/5) + 32)
// * 1. Soal Latihan Topic 3 jadikan function beserta parameter agar menjadi dinamis
//  * 2. Konversi Celsius ke Fahrenheit: Buatlah sebuah fungsi yang menerima satu parameter berupa suhu dalam Celsius dan mengembalikan suhu dalam Fahrenheit. (Rumus: Fahrenheit = (Celsius * 9/5) + 32)
//  * 3. Pangkat Sederhana: Buatlah sebuah function yang menerima dua parameter: base (angka dasar) dan exponent (pangkat). Fungsi ini akan mengembalikan hasil dari base dipangkatkan exponent.
//  * 4. Cek Huruf Vokal: Buatlah sebuah fungsi yang menerima satu parameter berupa huruf (string dengan panjang 1) dan mengembalikan "Vokal" jika huruf adalah vokal dan "Bukan Vokal" jika huruf bukan vokal.