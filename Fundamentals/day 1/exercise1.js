//area and perimeter of a rectangle
let panjang = 5;
let lebar = 5;
let luasPersegiPanjang = panjang * lebar;
let kelilingPersegiPanjang = 2 * (panjang + lebar);
console.log(`
luas persegi panjang : ${luasPersegiPanjang}, 
keliling persegi panjang : ${kelilingPersegiPanjang}`);

//diameter, circumference, and area of circle
let jariJari = 10;
let diameter = jariJari * 2;
let phi = 3.14;
let luasLingkaran = phi * jariJari * jariJari;
let kelilingLingkaran = (phi * diameter).toPrecision(2);
console.log(`
jari-jari: ${jariJari},
diameter: ${diameter},
luas lingkaran: ${luasLingkaran},
keliling lingkaran: ${kelilingLingkaran}`);

//beda hari
let tanggal1 = new Date("2022-10-25");
let tanggal2 = new Date("2022-09-05");
let tanggal1ToMs = tanggal1.getTime(); //get milisecond since 1 january 1970 - 25 october 2022
let tanggal2ToMs = tanggal2.getTime(); //get milisecond since 1 january 1970 - 05 september 2022
let msPerDay = 100 *24 * 60 * 60; //second to ms dikali 1000; 24 = 24 jam; 3600 = second per hour
tanggal1 = tanggal1ToMs / msPerDay;
tanggal2 = tanggal2ToMs / msPerDay;
let bedaHari = tanggal1 - tanggal2;
console.log(`Beda Hari: ${bedaHari}`);

//find angles of triangles if 2 angles is given
let sudut1 = 30;
let sudut2 = 40;
let sudut3 = 180 - (sudut1 - sudut2);
console.log(`sudut 3 : ${sudut3}`);

//convert days to years, month, and days
let tahun = 365;
let bulan = 30;
let hari = 1;
let totalHari = 400;
let tahun1 = (totalHari / tahun).toPrecision(1); //dibulatkan ke 1 angka dibelakang koma
let bulan1 = ((totalHari % tahun) / bulan).toPrecision(1); //dibulatkan ke 1 angka dibelakang koma
let hari1 = ((totalHari % tahun) % bulan) / hari;
// Math.floor(tahun1); //dibulatkan 
// Math.floor(bulan1);
// Math.floor(hari1);
console.log(`${totalHari} hari = ${tahun1} tahun, ${bulan1} bulan, ${hari1} hari`);

