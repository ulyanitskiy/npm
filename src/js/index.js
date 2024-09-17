'use strict';

function variableScopeDemonstration() {
  for (let i = 0; i < 3; i++) {
    var varVariable = 'Змінна var усередині циклу';
    let letVariable = 'Змінна let усередині циклу';
    const constVariable = 'Змінна const усередині циклу';

    console.log('Усередині циклу (var):', varVariable);
    console.log('Усередині циклу (let):', letVariable);
    console.log('Усередині циклу (const):', constVariable);
  }

  console.log('Після циклу (var):', varVariable);
  console.log('Після циклу (let):', letVariable);
  console.log('Після циклу (const):', constVariable);
}
variableScopeDemonstration();

/*
Пояснення

Хойстинг кожної змінної:

var — змінні піднімаються вгору своєї області видимості.
Це означає, що змінна існує до рядка оголошення, але її значення
буде невизначено до моменту присвоєння.

let і const - теж піднімаються, але знаходяться в "temporal dead zone".
Це означає, що вони не будуть доступні до їх ініціалізації у коді.

Область видимості кожної змінної:

var - змінна з областю видимості всередині функції, але доступна і поза циклу.
Після завершення циклу її можна використати далі.

let - змінна з блочною областю видимості. Працює лише всередині блоку (циклу).
За межами циклу її немає, і доступ до неї викликає помилку.

const - аналогічно let, працює тільки всередині блоку, але її значення не можна змінити.
Після циклу також недоступна.
*/
