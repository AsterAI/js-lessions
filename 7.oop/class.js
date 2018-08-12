class ExampleUserClass {

  constructor (name, sex) {
    this.name = name;
    this.sex = sex; // female, unsure
  }

  asqQuestion() {
    let verb = 'ходил';
    switch (this.sex) {
      case 'female': verb += 'а'; break;
      case 'unsure': verb += 'о'; break;
    }
    console.log(`${this.name} ты ${verb} в кино?`);
  }

}
