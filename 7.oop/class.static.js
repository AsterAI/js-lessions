class Student {

  constructor (name) {
    this.name = name;
    Student.total++;
    this.total = 1;
  }

  testStaticMethods() {
    console.log(`-----------   ${this.name} ----------------`);
    console.log("Total students = " + Student.getTotal());
    console.log("this.tatal = " + this.total);
    console.log('-------------------------------------')
  }

  static getTotal() {
    return Student.total;
  }

}

Student.total = 0;

class GoodStudent extends Student {

}
