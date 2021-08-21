class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
  };
  _state = 100;
  type = null;

  fix() {
    this.state = this.state * 1.5;
  };

  set state(stateNubmer) {
    if (stateNubmer > 100) {
      this._state = 100;
    } else if (this.state < 0) {
      this._state = 0;
    } else {
      this._state = stateNubmer;
    };
  };

  get state() {
    return this._state;
  };
};

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
  };
  type = "magazine";
};

class Book extends Magazine {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
  };
  type = "book";
};

class NovelBook extends Book {
  type = "novel";
};
class FantasticBook extends Book {
  type = "fantastic";
};
class DetectiveBook extends Book {
  type = "detective";
};

class Library {
  constructor(name) {
    this.name = name;
  };

  books = [];

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    };
  };

  findBookBy(type, value) {
    let bookIndex = this.books.findIndex((item) => item[type] === value);
    if (bookIndex != -1) {
      return this.books[bookIndex]
    } else {
      return null;
    };
  };

  giveBookByName(bookName) {
    let bookIndex = this.books.findIndex((item) => item.name === bookName);
    if (bookIndex != -1) {
      let bookReturn = this.books[bookIndex];
      this.books.splice([bookIndex], [1]);
      return bookReturn;
    } else {
      return null;
    };
  };
};

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3






class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  };
  marks = [];

  addMark(mark, discipline) {
    if (mark > 5 && mark < 1) {
      return false
    } else {
      let discIndex = this.marks.findIndex((item) => item.name === discipline);
      if (discIndex != -1) {
        this.marks[discIndex].marksOnDiscipline.push(mark)
      } else {
        this.addDiscipline(discipline);
        this.marks[this.marks.findIndex((item) => item.name === discipline)].marksOnDiscipline.push(mark)
      }
    }
  };

  addDiscipline(discipline) {
    this.marks.push(new Discipline(discipline));
  }
};

class Discipline {
  constructor(discipline) {
    this.name = discipline;
  };
  marksOnDiscipline = [];
};

const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
// student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
// student.getAverageBySubject("biology"); // Несуществующий предмет
// student.getAverage(); // Средний балл по всем предметам 4.75
// student.exclude("Исключен за попытку подделать оценки");