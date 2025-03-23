let name;
name = "Pertemuan 3";
name = "Pertemuan 4";

let kelas;
kelas = "4A";

let prodi = " Sistem Informasi";

console.log(name);
console.log(kelas);

const phi = 3.14;
const greet = "Selamat datang ";

console.log(greet + "di" + prodi);

let isSucces = true;
let isFailed = false;

console.log(isSucces);
console.log(isFailed);

// let faculties = [
//     "Fakultas Ilmu Komputer",
//     "Fakultas Hukum",
//     "Fakultas Teknik",
//     "Fakultas Ilmu Sosial dan Ilmu Politik",
//     "Fakultas Agama Islam"
//     ];
//     console.log(faculties[0]);
//     console.log(faculties[1]);
//     console.log(faculties[2]);
//     console.log(faculties[3]);
//     console.log(faculties[4]);

//     faculties[1] = "Fakultas Ekonomi";
//     console.log(faculties);

    // let penjumlahan = 5 + 5;
    // let pengurangan = 10 - 5;
    // let perkalian = 5 * 5;
    // let pembagian = 10 / 2;
    // let modulus = 10 % 2;

    // console.log(penjumlahan);
    // console.log(pengurangan);
    // console.log(perkalian);
    // console.log(pembagian);
    // console.log(modulus);

    let a = 10;
    let b = 20;

    let result = a < b;
    console.log(result);

    bool = true && false;
    console.log(bool);

    bool = true || false;
    console.log(bool);

    bool = !true;
    console.log(bool);

    let male = ["Ujang Sanjaya","Kevin Alam","Dedi Wijaya"];
    console.log(male);
    let female = ["Lilis Puspitasari","Ririn Noviyanti","Putri Wijaya"];
    console.log(female);

    let students = [...male,...female];
    console.log(students);

    let gender;
    gender = 'L';
    if(gender === 'M'){
        console.log("I'm a man");
    }
    else{
        console.log("Not Valid")
    }

    // let username, password;
    // username = "Admin";
    // password = "qwerty";
    // const isSuccess = true;
    // const isFailed = false;
    // if(username ==="Admin" && password === "qwerty"){
    // console.log(isSuccess);
    // }else if(username === "Admin" && password !== "qwerty"){
    // console.log(isFailed);
    // }else if(username !== "Admin" && password === "qwerty"){
    // console.log(isFailed);
    // }else{
    // console.log(isSuccess);
    // }

    let grade = 'D';
switch(grade){
case 'A':
console.log("Very good");
break;
case 'B':
console.log("Good");
break;
case 'C':
console.log("Enough");
break;
case 'D':
console.log("Very Enough");
break;
default:
console.log("No Grade");
break;
}