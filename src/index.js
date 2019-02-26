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

const timer = setTimeout(function() {
  console.log("This is the good news!");
}, 5000);
console.log(timer);
