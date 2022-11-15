//tack_1
/* 1. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей
цього об’єкта.
Наприклад для об’єкта
let mentor = {
            course: "JS fundamental",
            duration: 3,
            direction: "web-development"
        };
Результат має бути 3.
propsCount(mentor);  // 3 
*/

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

function propsCount(currentObject){
    let keys = Object.keys(currentObject);
    return keys.length;
}

console.log(propsCount(mentor));

//tack_2
/* 2. Створіть довільний об’єкт, який має 5 полів. Необхідно написати функцію showProps(obj), яка приймає
даний об’єкт і виводить список його властивостей записаних в масив. Виведіть також масив значень властивостей
об’єкта. */

          let client = {
               name: "BMW",
               index: "9999",
               adress: "Dnipro",
               iban: "UA999999999999999999999999999999",
               mail: "bmw@gmail.com",
          };
          function showProps(obj) {
               return ("property: [" + Object.keys(client) + "] values: [" + Object.values(client) + "]");
          };
          console.log(showProps());

//tack_3
/* 3. Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься метод
showFullName(), який виводить ім’я і прізвище особи.
	Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year
(рік вступу до університету).
	В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище,
але і по-батькові (midleName) студента.
	Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента
(від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу
до ВУЗу year.
	Приклад результату:
const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 6
*/

class Person {
      constructor(name, surname) {
          this.name = name;
          this.surname = surname;
      }
      showFullName() {
          return this.name + ' '+ this.surname
      }
  }
  let person = new Person ('Aleksandr', 'Yatsko')
  person.showFullName();
  
  class Student extends Person {
      constructor(name, surname, year) {
          super(name, surname);
          this.year = year;
      }
      showFullName(midleName) {
          return this.surname + ' '+ this.name + ' '+ midleName
      }
      showCourse() {
          let nowYear = new Date().getFullYear();
          let course = nowYear - this.year;
          return 'Current course: ' + course
      }
  }
  let student = new Student('Aleksandr', 'Yatsko', 2022);
  console.log(student.showFullName('Yurievich'));
  console.log(student.showCourse());

  //tack_4

/* Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), 
dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів).
1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки 
dayRate на кількість відпрацьованих днів workingDays.
2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник 
при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
4) Вивести значення зарплати з новим experience.
5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. 
Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   
worker_fullName: salary_value
6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker. */
class Worker {
      #experience = 1.2;
      constructor(fullName, dayRate, workingDays){
          this.fullName = fullName;
          this.dayRate = dayRate;
          this.workingDays = workingDays;
      }
      showSalary() {
          return this.dayRate*this.workingDays
      }
      showSalaryWithExperience() {
          return this.showSalary()*this.#experience
      }
      get showExp() {
          return this.#experience 
      }
      set setExp(value) {
          this.#experience = value;
      }
  }
  let worker1 = new Worker("John Johnson", 20, 23);
  worker1.showSalary();
  console.log(worker1.fullName);
  console.log(worker1.fullName + ' salary: ' + worker1.showSalary());
  console.log("New experience: " + worker1.showExp);
  console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());
  worker1.setExp = 1.5;
  console.log("New experience: " + worker1.showExp);
  console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());
  
  let worker2 = new Worker("Tom Tomson", 48, 22);
  worker2.showSalary();
  console.log(worker2.fullName);
  console.log(worker2.fullName + ' salary: ' + worker2.showSalary());
  console.log("New experience: " + worker2.showExp);
  console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());
  worker2.setExp = 1.5;
  console.log("New experience: " + worker2.showExp);
  console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());
  
  let worker3 = new Worker("Andy Ander", 29, 23);
  worker3.showSalary();
  console.log(worker3.fullName);
  console.log(worker3.fullName + ' salary: ' + worker3.showSalary());
  console.log("New experience: " + worker3.showExp);
  console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());
  worker3.setExp = 1.5;
  console.log("New experience: " + worker3.showExp);
  console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());
  
  let workers = [worker1, worker2, worker3];
  
  function sortWorkersBySalary(workers) {
      workers.sort(function(a,b){
          return a.showSalaryWithExperience() - b.showSalaryWithExperience();
      });
      return workers
  }
  function showWorkersList(workers) {
      console.log('Sorted salary: ');
      for (let i = 0; i < workers.length; i++) {
          console.log(workers[i].fullName + ': '+ workers[i].showSalaryWithExperience())
      }
  }
  showWorkersList(workers);

//tack_5

/* Створіть батьківський клас GeometricFigure, який має порожній метод для визначення площі getArea() та метод toString() 
для виведення назви класу.
Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure. Кожен з дочірніх класів 
має свою реалізацію методу getArea(), для визначення площі фігури. В конструкторах дочірніх класів передбачити властивості 
необхідні для визначення площі фігури, наприклад для кола - радіус r.
	Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів дочірніх класів figures, перевірятиме 
чи об’єкт належить батьківському класу з урахуванням наслідування, виводитиме назву створеного об’єкту відповідної фігури,
розраховану площу фігури та сумарну площу всіх фігур. Для реалізації функції можете використати метод reduce().
*/

class GeometricFigure {
  getArea(){
      return 0;
  }
  toString(){
      return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
  }
  getArea() {
      return 0.5*this.base*this.height;
  }
}

class Square extends GeometricFigure {
  constructor(side) {
      super();
      this.side = side;
  }
  getArea() {
      return Math.pow(this.side, 2);
  }
}

class Circle extends GeometricFigure {
  constructor (radius) {
      super();
      this.radius = radius;
  }
  getArea() {
      return Math.PI* Math.pow(this.radius, 2);
  }
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(figures);

function handleFigures(figures) {
  let array = [];
  for (let i of figures) {
      if (i instanceof GeometricFigure) {
          console.log('Geometric figure: ' + i.toString() + ' area - ' + i.getArea());
      }
      array.push(i.getArea());
  }
  let sumOfFigure = array.reduce(function(sum, figure) {
      return sum + figure;
  }, 0);
  console.log(sumOfFigure);
}

handleFigures(figures);
