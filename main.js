class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        age = setInterval(() => this.age++, 1000);
    }
}

let prs1 = new Person("prs1", 1);
let prs2 = new Person("prs2", 2);
let prs3 = new Person("prs3", 3);
let prs4 = new Person("prs4", 4);

let personsArray = [];
personsArray.push(prs1, prs2, prs3, prs4);

function checkAge(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].age > 39) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

function clearArray () {
  return setInterval(checkAge, 1000, personsArray);
}

function addPersonToArray () {
  return setInterval(() => personsArray.push(new Person("prs", Math.floor(1 + Math.random() * 50))), 2000);
}

clearArray();
addPersonToArray();