class User {

  constructor (name, sex) {
    this.name = name;
    this.sex = sex; // female, unsure
  }

  ascQuestion() {
    let verb = 'ходил';
    switch (this.sex) {
      case 'female': verb += 'а'; break;
      case 'unsure': verb += 'о'; break;
    }
    console.log(`${this.name} ты ${verb} в кино?`);
  }

  getName() {
    return this.name;
  }

}

class Employee extends User {

  constructor (name, sex, cost) {
    super(name, sex);
    this.cost = cost;
  }

  getCost() {
    return this.cost;
  }

}
