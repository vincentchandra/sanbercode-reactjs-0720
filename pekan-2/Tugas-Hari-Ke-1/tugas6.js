// soal 1
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var objDaftarPeserta = {
	nama : arrayDaftarPeserta[0],
	"jenis kelamin": arrayDaftarPeserta[1],
	hobi : arrayDaftarPeserta[2],
	"tahun lahir": arrayDaftarPeserta[3]
}
// console.log(objDaftarPeserta.nama);
// console.log(objDaftarPeserta["jenis kelamin"]);
// console.log(objDaftarPeserta.hobi);
// console.log(objDaftarPeserta["tahun lahir"]);

// soal 2
var arrayOfObject = [
	{nama: "strawberry", warna: "merah", "ada bijinya": "tidak",harga: 9000 },
	{nama: "jeruk", warna: "oranye", "ada bijinya": "ada", harga: 8000},
	{nama: "Semangka", warna: "Hijau & Merah", "ada bijinya": "ada", harga: 10000},
	{nama: "Pisang", warna: "Kuning", "ada bijinya": "tidak", harga: 5000}
]
console.log(arrayOfObject[0]);

// soal 3
var dataFilm = []
function addFilm(nama, durasi , genre, tahun){
	var obj = {
		nama: nama,
		durasi: durasi,
		genre : genre,
		tahun : tahun
	}
	dataFilm.push(obj);
}

// soal 4
class Animal{
	constructor(name){
		this._name = name;
		this._legs = 4;
		this._cold_blooded = false;
	}
	get name(){
		return this._name;
	}
	set name(x){
		this._name = x;
	}
	get legs(){
		return this._legs;
	}
	set legs(x){
		this._legs = x;
	}get cold_blooded(){
		return this._cold_blooded;
	}
	set cold_blooded(x){
		this._cold_blooded = x;
	}
}

var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

class Frog extends Animal{
	constructor(name){
		super(name);
	}
	jump(){
		console.log("hop hop");
	}
}

class Ape extends Animal{
	constructor(name){
		super(name);
		this._legs = 2;
	}
	yell(){
		console.log("Auooo")
	}
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 


// soal 5
class Clock{
  constructor(object){
  	this._template = object["template"];
  	this._timer;
  }
  get template(){
  	return this._template;
  }
  set template(x){
  	this._template = x;
  }
  get timer(){
  	return this._timer;
  }
  set timer(x){
  	this._timer = x;
  }

  
  render() {

    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    this.template = 'h:m:s';
    var output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render, 1000);
  }

}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 
