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

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  };
  marks = {};

  addMark(mark, discipline) {
    if (mark > 5 || mark < 1) {
      return console.log('Ошибка, оценка должна быть числом от 1 до 5');
    } else {
      if (this.marks[discipline] != undefined) {
        this.marks[discipline].push(mark);
      } else {
        this.addDiscipline(discipline);
        this.marks[discipline].push(mark);
      };
    };
  };

  addDiscipline(discipline) {
    this.marks[discipline] = [];
  };

  getAverageBySubject(discipline) {
    if (this.marks[discipline] != undefined) {
      
        if (this.marks[discipline].length > 0) {
          let sum = this.marks[discipline].reduce((acc, item) => acc += item);
        return sum / this.marks[discipline].length
      } else {
        return console.log('оценок нет');
      };
    } else {
      return console.log(`Предмета ${discipline} не существует`);
    };
  };

  getAverage() {
    let length = 0;
    let sum = 0;
    for (let key in this.marks) {
      sum += this.marks[key].reduce((acc, item) => acc += item);
      length += this.marks[key].length;
    }

    return sum / length
  };

  exclude(reason) {
    delete this.marks;
    this.excluded = reason;
    console.log(reason);
  };
};