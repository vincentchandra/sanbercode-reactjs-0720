// soal 1
let luasLingkaran = (r) => {
    const phi = 3.14;
    return phi*r*r;
}

let kelilingLingkaran = (r) => {
    const phi = 3.14;
    return 2*phi*r;
}

// soal 2
let kalimat = "";
let tambahKata = (a,b,c,d,e) =>{
    kalimat = `${a} ${b} ${c} ${d} ${e}`;
}
tambahKata("saya", "adalah", "seorang", "frontend", "developer");
console.log(kalimat);

// soal 3
class Book{
    constructor(name, totalPage, price){
        this.name = name;
        this.totalPage = totalPage;
        this.price = price;
    }
}

class Komik extends Book{
    constructor(name, totalPage, price, isColorful){
        super(name, totalPage, price);
        this.isColorful = isColorful;
    }
}
