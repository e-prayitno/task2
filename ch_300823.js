//STRING
//MANIPULASI STRING
console.log("------STRING-----")
console.log("-----------------")
console.log("MANIPULASI STRING")
console.log("-----------------")
let nami = "Eko Prayitno"
let loveJS = "Love Javascript"

//function Nama
const n4me = function(nami){
  return nami
}
console.log("Nama           : " +n4me(nami)); 

//function jumlah string
const totalString = function(nami){  
  let result = nami.length
    return result
}
console.log("Jumlah String  : " +totalString(nami));

//function upperCase
const upperCase = function(nami){
    let result = nami.toUpperCase()
    return result
}
console.log("Huruf Besar    : " +upperCase(nami));

//function lowerCase
const lowerCase = function(nami){
    let result = nami.toLowerCase()
    return result
}
console.log("Huruf Kecil    : " +lowerCase(nami));

// function firstletter
const firstLetter = function(nami){
    let result = nami[0]
    return result
}
console.log("Huruf Pertama  : "+ firstLetter(nami));

// function firstName
const firstName = function (nami){
    let result = nami.substring(0,4)
    return result
}
console.log("Nama Pertama   : " + firstName(nami));

// function loveJS
const lJS = function(nami){
    let result = nami.substring(0,4)
    let result1 = result + loveJS
    return result1
}
console.log(lJS(nami));

// function lastCase
const lastCase = function(nami){
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
const toNumber = function (age) { 
    let result = parseInt(age)
    console.log("Tipe data ==>> " + typeof result)
    return result    
}
console.log("Ubah String to Number : " +toNumber(age));
console.log("");


//nomor toFloat
let height = "167.9"
const toFloat = function(height) { 
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
const checkData = function(student) { 
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
const add = function(n1, n2) {
    let result = n1 + n2
    return result
}
console.log("Hasil dari : " + angka.n1 + " + " + angka.n2 + " = " + add(angka.n1,angka.n2));

const substrc = function (n1, n2) {
    let result = n1 - n2
    return result
}
console.log("Hasil dari : " + angka.n1 + " - " + angka.n2 + " = " + substrc(angka.n1,angka.n2));

//PERKALIAN DAN PEMBAGIAN
console.log(" ")
console.log("-----------------------")
console.log("PERKALIAN DAN PEMBAGIAN")
console.log("-----------------------")

const multiply = function(n3, n4) {
    let result = n3 * n4
    return result
}
console.log("Hasil dari : " + angka.n3 + " x " + angka.n4 + " = " + multiply(angka.n3, angka.n4))

const devide = function(n3, n4) {
    let result = n3 / n4
    return result
}
console.log("Hasil dari : " + angka.n3 + " / " + angka.n4 + " = "+ devide(angka.n3, angka.n4))

// PANGKAT BILANGAN
console.log(" ")
console.log("----------------")
console.log("PANGKAT BILANGAN")
console.log("----------------")

const pow = function(base, exp) {
    let result = base ** exp
    return result
}
console.log("Hasil dari : " + angka.base + " ^ " + angka.exp + " = " + pow(angka.base, angka.exp))

// RATA-RATA DARI ARRAY
console.log(" ")
console.log("--------------------")
console.log("RATA-RATA DARI ARRAY")
console.log("--------------------")

const  avg = function(array) {
    let result = array.reduce((a,b) => a + b) / array.length
    return result
}
console.log("Rata-rata dari : " + angka.array + " " + "adalah : " + avg(angka.array));

// BILANGAN GANJIL ATAU GENAP
console.log(" ")
console.log("--------------------------")
console.log("BILANGAN GANJIL ATAU GENAP")
console.log("--------------------------")

const GG = function(n5){
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

const ran = function(rand) {
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
const toFahr = function(celcius) {
    let result = (celcius * 9/5) + 32
    return result
}
console.log("Nilai dari "+ celcius + " derajat celcius ke Fahrenheit adalah " +toFahr(celcius));

console.log(" ")
console.log("---------------------")
console.log("Cek Huruf Vokal")
console.log("---------------------")

let letter = "p"
const vocal = function(letter) {
    if (letter == "a" || letter == "i" || letter == "u" || letter == "e" || letter == "o") {
        console.log("Huruf "+ letter +" adalah huruf vokal");
    } else {
        console.log("Huruf "+ letter +" BUKAN huruf vokal");
    }
}
vocal(letter)

// // // 1. Membuat function calculator dan pakai validasi number
// // // 2. Buatkan soal sebelumnya dengan function declaration dan expression

// Fungsi KALKULATOR
let input1 = 15
let input2 = 53
let opr = "*"

const Calc = function(input1, input2, opr) {
    if (typeof input1 !== "number" || typeof input2 !== "number") {
        return "Inputan harus berupa angka !!";
    }

    if (opr =="+"){
        return input1 + input2;
    } 
    else if (opr == "-") {
        return input1 - input2;
    }
    else if (opr == "*") {
        return input1 * input2;
    }
    else if (opr == "/") {
        return input1 / input2;
    }
}

let result = Calc(input1, input2, opr);
console.log (" ");
console.log("----------");
console.log("KALKULATOR");
console.log("----------");
console.log ("Hasil dari " + input1 +" "+ opr +" "+ input2 +" adalah "+result);