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
}

Student.total = 0;

Student.getTotal = () =>  {
  return Student.total;
};

class GoodStudent extends Student {

}
