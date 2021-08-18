function Student(name, gender, age) {
    // Ваш код
this.name = name;
this.gender = gender;
this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marksNew) {
  if (this.marks === undefined) {
    this.marks = marksNew;
  } else {
    this.marks = this.marks.concat(marksNew);
  }
}

Student.prototype.getAverage = function() {
  let average = this.marks.reduce((acc, item, idx) => {
    acc+= item;
    if (idx === this.marks.length - 1) {
      return (acc / this.marks.length);
    } else {
      return acc;
    }
  })
  return average
}

Student.prototype.excludeStudent = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
// ваш код для остальных методов