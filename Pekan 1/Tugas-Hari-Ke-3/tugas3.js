// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
kataPertama = kataPertama.concat(" ");
kataKedua = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1);
kataKedua = kataKedua.concat(" ");
kataKetiga = kataKetiga.concat(" ");
kataKeempat = kataKeempat.toUpperCase();
var gabung = kataPertama.concat(kataKedua.concat(kataKetiga.concat(kataKeempat)));
console.log(gabung);


// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var jumlah = parseInt(kataPertama)+parseInt(kataKedua)+parseInt(kataKetiga)+parseInt(kataKeempat);
console.log(jumlah);


// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substring(15, 18); // do your own! 
var kataKeempat = kalimat.substr(19,5); // do your own! 
var kataKelima = kalimat.substr(25, 6); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// soal 4
var nilai = 75;
var index;
if(nilai>=80){
    index='A';
}
else if(nilai>=70){
    index='B';
}
else if(nilai>=60){
    index='C';
}
else if(nilai>=50){
    index='D';
}
else if(nilai<50){
    index='E';
}
console.log(index);

// soal 5
var tanggal = 10;
var bulan = 4;
var tahun = 2001;
switch(bulan){
    case 1:{
        bulan="Januari";
        break;
    }
    case 2:{
        bulan="Februari";
        break;
    }
    case 3:{
        bulan="Maret";
        break;
    }
    case 4:{
        bulan="April";
        break;
    }
    case 5:{
        bulan="Mei";
        break;
    }
    case 6:{
        bulan="Juni";
        break;
    }
    case 7:{
        bulan="Juli";
        break;
    }
    case 8:{
        bulan="Agustus";
        break;
    }
    case 9:{
        bulan="September";
        break;
    }
    case 10:{
        bulan="Oktober";
        break;
    }
    case 11:{
        bulan="November";
        break;
    }
    case 12:{
        bulan="Desember";
        break;
    }
}
console.log(tanggal + " " + bulan + " " + tahun);
