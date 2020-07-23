//soal 1
var idx=2;
console.log("LOOPING PERTAMA");
while(idx<=20){
    console.log(idx+" - I love coding");
    idx+=2;
}
console.log("LOOPING KEDUA");
while(idx>2){
    idx-=2;
    console.log(idx+" - I will become a frontend developer");
    
}

//soal 2
for(var i=1;i<=20;i++){
    if(i%2==1){
        if(i%3==0){
            console.log(i+" - I love Coding");
        }
        else{
            console.log(i+" - Santai");
        }
    }
    else{
        console.log(i+" - Berkualitas");
    }
}

//soal 3
for(var i=1;i<=7;i++){
    var a="";
    for(var j=0;j<i;j++){
        a+="#";
    }
    console.log(a);
}

//soal 4
var kalimat="saya sangat senang belajar javascript";
var arr = kalimat.split(" ");
console.log(arr);

//soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for(var i=0;i<daftarBuah.length;i++){
    console.log(daftarBuah[i]);
}


