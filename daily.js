function getHasil(nilai) {
  if (nilai >= 90) {
    console.log("A");
  } else if (nilai >= 80 && nilai <= 89) {
    console.log("B");
  } else if (nilai >= 70 && nilai <= 79) {
    console.log("C");
  } else if (nilai >= 60 && nilai <= 69) {
    console.log("D");
  } else {
    console.log("E");
  }
}
// getHasil(30);
// getHasil(60);
// getHasil(70);
// getHasil(80);
// getHasil(100);

function isNumber(number) {
  if (number % 2 == 1) {
    console.log("Ganjil");
  } else {
    console.log("Genap");
  }
}

// isNumber(0);
// isNumber(43);
// isNumber(1032);

function isLeapYear(year) {
  if (year % 400 == 0) {
    console.log("Kabisat");
  } else if (year % 100 == 0) {
    console.log("Bukan Kabisat");
  } else if (year % 4 == 0) {
    console.log("Kabisat");
  } else {
    console.log("Bukan Kabisat");
  }
}
// isLeapYear(1900);
// isLeapYear(2000);
// isLeapYear(2001);
// isLeapYear(2016);

function isRatingFilm(age) {
  if (age >= 21) {
    console.log("Dewasa");
  } else if (age >= 13) {
    console.log("Remaja");
  } else if (age >= 9) {
    console.log("Bimbingan Orang Tua");
  } else {
    console.log("Semua Usia");
  }
}

// isRatingFilm(15);
// isRatingFilm(32);
// isRatingFilm(9);
// isRatingFilm(7);
// isRatingFilm(21);
// isRatingFilm(20);

function printRange(start, end) {
  const num = [];
  for (let i = start; i <= end; i++) {
    num.push(i);
  }
  const result = num.join(",");
  console.log(result);
}

// printRange(4, 8);

function printOddNum() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}

// printOddNum();
//
//

const stuff = ["Meja", "Buku", "Topi", "Baju", "Kayu"];

stuff.unshift("Handuk");

stuff.push("Celana");

// console.log(stuff);

//

const fruits = ["Jeruk", "Pepaya", "Jambu", "Anggur", "Melon"];

const index = fruits.indexOf("Jambu");

if (index > -1) {
  fruits.splice(index, 1);
}

// console.log(fruits);

//
//

const people = [
  { id: 1, name: "Udin", age: 12 },
  { id: 2, name: "Wati", age: 51 },
  { id: 3, name: "Budi", age: 34 },
  { id: 4, name: "Agus", age: 16 },
  { id: 5, name: "Sari", age: 19 },
  { id: 6, name: "Ririn", age: 21 },
];
const filterPeople = people.filter((p) => p.age < 21);
// console.log(filterPeople);

function sum(a, b) {
  return a + b;
}

// console.log(sum(10, 5));
//
//

const book = {
  bookName: "Pemrograman JavaScript untuk Pemula",
  quantity: 10,
  isPurchased: function () {
    if (this.quantity > 0) {
      console.log("You can buy the book");
    } else {
      console.log("You cannot buy the book");
    }
  },
};

book.isPurchased();
book.quantity = 0;
book.isPurchased();
