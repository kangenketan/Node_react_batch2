class Car {
  constructor(brand, factory) {
    this.brand = brand;
    this.factory = factory;
    this.sound = "honk,,,honk";
    this._color = "";
  }
  get color() {
    return this._color;
  }
  set color(c) {
    this._color = c;
  }
  present(x) {
    return "Hello" + x + " My Factory is" + this.factory;
  }
  static hello() {
    return "Hello";
  }
}
var innovam = new Car("Innova", "Toyota");
console.log(innovam);
console.log(innovam.present("Jhon"));
innovam._color = "Red";
console.log(innovam);

class Orang {
  construction(nama) {
    this.name = nama;
    this.age = "";
  }
  // berjalan() {
  //   return "TAP TAP TAP";
  // }
}

class Guru extends Orang {
  constructor(nama, umur) {
    super(nama, umur), (this.school = "");
  }
  berjalan() {
    return "HOP HOP HOP";
  }
}
var guru = new Guru("Abidin");
guru.age = 24;
guru.school = "SMP 1";
console.log(guru);
console.log(guru.berjalan());

var newOrang = new Orang();
console.log(newOrang.berjalan());
