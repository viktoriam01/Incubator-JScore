"use strict"

const user1 = { //#573
  name: 'Bob',
  age: 23,
  isStudent: true
}

const user2 = user1 //#573
user2.name = "Ann" //переписал исходный объект
console.log(user1); // оба выведут измененный начальный объект
console.log(user2);

//Создать копию объекта: делаем копию => вносим изменения в копию => используем копию с изменениями

// Создание копии в лоб:
const copyUser = {}; // new Object()
copyUser.name = user1.name;
copyUser.age = user1.age;
copyUser.isStudent = user1.isStudent;
console.log(copyUser);
console.log(copyUser === user1); //проверка, что это два разных объекта. False  - значит, что ссылки на объекты разные, true - что ссылка одна и та же (т.е. копия не создана)

// Создание копии через spred оператор (поверхностное, без учета вложенности)
const copyUser2 = {...user1}; 
console.log(copyUser2 === user1);
const copyUser3 = {...user1, isStudent: false}; //изменение существующего свойства
const copyUser4 = {...user1, isMarried: false}; //добавление свойства

// копирование(распаковка) двух объектов в один
const address = {
  country: 'Thailand',
  city: 'Bangkok'
}

const addedCopy = {...user1, ...address}
console.log(addedCopy);

// Глубокое копирование с учетом вложенности
const student = { //#573
  name: 'Bob',
  age: 23,
  isStudent: true,
  address: {
    country: 'Thailand',
    city: 'Bangkok',
    coordinates: {
      x: 100,
      y: 150
    }
  },
  courses: ['HTML', 'CSS', 'JS']
  }

//При поверхностном копировании при работе с вложенностью в копии объекта первоначальный  объект так же меняется
const copyStudent = {...student}
copyStudent.courses.push('React')
console.log(student); // +React
console.log(copyStudent); // +React

//поэтому работаем иначе. Добавим редакс в список курсов:
const copyStudent2 = {...student, courses: [...student.courses, 'Redux']}
console.log(student); // No redux
console.log(copyStudent2); // +redux

//глубокое изменение координат (2й уровень вложенности)
const copyStudent3 = {...student, adress: {...student.address, coordinates: {...student.address.coordinates, x: 200, y: 300}}}
console.log(student); // no changes in coords
console.log(copyStudent3);// coords changed

//Другие сопособы создания копии - пробежаться циклом, устаревший способ - метод Object.assign(), через  джсон стрингифай перевести в строку и распарсить обратно (но этот способ не очень хорош для реакта)


//Работа с массивами  CRUD (Create, Read, Upload, Delete)

const users = [
  {
    id: 1,
    name: 'Bob',
    isStudent: true,
    address: {
      country: 'Thailand',
      city: 'Bangkok',
    }
  },

  {
    id: 2,
    name: 'Alex',
    isStudent: true,
    address: {
      country: 'Thailand',
      city: 'Bangkok',
    }
  },

  {
    id: 3,
    name: 'Ann',
    isStudent: true,
    address: {
      country: 'Thailand',
      city: 'Bangkok',
    }
  },

  {
    id: 4,
    name: 'Donald',
    isStudent: true,
    address: {
      country: 'Thailand',
      city: 'Bangkok',
    }
  },

]

//добавление элемента в массив

const newUser = {
    id: 5,
    name: 'Adam',
    isStudent: true,
    address: {
      country: 'Thailand',
      city: 'Bangkok',
    },
}

const users2 = [...users, newUser]
console.log(users2);

// удаление элемента из массива Delete id === 3

const users3 = users.filter(user => user.id !== 3)
console.log(users3);


//изменение элемента в массиве id = 1, new city = Phuket
const users4 = users.map(user => user.id === 1 ? {...user, address: {...user.address, city: 'Phuket'}} : user)
console.log(users4);