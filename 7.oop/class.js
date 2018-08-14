class ExampleUserClass {

  constructor (name, sex) {
    this.name = name;
    this.sex = sex; // female, unsure

    // incapsulation
    // return {
    //   ascQuestion: this.ascQuestion.bind(this)
    // }
  }

  ascQuestion() {
    let verb = 'ходил';
    switch (this.sex) {
      case 'female': verb += 'а'; break;
      case 'unsure': verb += 'о'; break;
    }
    console.log(`${this.name} ты ${verb} в кино?`);
  }

}
