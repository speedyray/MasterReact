// const person = {
//     name: 'Ray',
//     age: 55,
//     walk(){return "Wanzam"},
//     talk(){return "Kalaputapu"}
//   };
//   const walk = person.talk.bind(person);
//   console.log(walk());

// const square = function(number){
//     return number * number;
// }
// const square = number => number * number;
// console.log(square(12));
// const jobs = [
//     {  id:1, isActive: true  },
//     {  id:2, isActive: true  },
//     {  id:3, isActive: false  },
// ]
// const activeJobs = jobs.filter(job => job.isActive )
// console.log(activeJobs);

// const timer = setTimeout(function() {
//   console.log("This is the good news!");
// }, 5000);
// console.log(timer);

// const colors = ['red', 'green', 'blue'];
// const items  = colors.map(color => `<li>${color}</li>`);
// console.log(items);
// Object destructuring
// const address = {
//     street: '222 Kennedy Avenue',
//     city: 'Numericity',
//     country: 'Zamda'
// }
// put object keys in curly braces
// const { street, city, country} = address;
// console.log(address);
// console.log(street);
// console.log(city);
// console.log(country);

// const first = [1, 2, 3, 4];
// const second = [5, 6, 7, 8];

// const combined = first.concat(second);
// const combined = [...first, ...second]
// console.log(combined);
// const third = [ 10, 11, 12, 13];
//  const fourth = Object.assign({}, third)
//  console.log(fourth);
//  console.log(third);
// const first = {name: 'Raynold'};
// const second = {city: 'Seattle'}
// const combinedObject = {...first, ...second, country: 'Canada'};
// console.log(combinedObject);

const first = { name: 'Richard the lion heart'}
const cloned = {...first}
console.log(cloned);
console.log(first);
console.log(Object.is('cloned', 'first')); 



class Person {
    constructor(name){
        this.name = name;
    }
        treeWalker(){
            console.log("walking");
        }
    }


    class Runner  extends Person{
        constructor(name, id){
          super(name)
          this.id = id;
        }

        run(){
         "Running away!"
        }
    }

      

    const runner = new Runner("Raynold", "12345")
    runner.treeWalker();


































