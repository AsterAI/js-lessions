const user = {
    name: 'Vasia',
    sex: 'male' // female, unsure
}

const ascQuestion = (userData) => {
    let verb = 'ходил';
    switch (userData.sex) {
        case 'female': verb += 'а'; break;
        case 'unsure': verb += 'о'; break;
    }
    console.log(`${userData.name} ты ${verb} в кино?`);
}
