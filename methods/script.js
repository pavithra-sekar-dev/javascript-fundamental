/*Reference Types
 object -{} -JSON (javascript object notation) key:value pairs
 value -is type of any 
 key -is type of str 
 group of variables */

let person = {
  fname: 'ram',
  lname: 'kumar',
  mobile: '+90687687',
};

console.log('typeof person', person, typeof person);

//object access through keys
// dot operator -objName.key, square bracket-objName["key"]
console.log(person.fname.toUpperCase(), person['lname']);

console.log('keys of arr', Object.keys(person));
console.log('valu of arr', Object.values(person));
console.log('entries of arr', Object.entries(person));

console.log('*********iterating*******');
for (let k of Object.keys(person)) {
  console.log('key', k, person[k]);
}
for (let v of Object.values(person)) {
  console.log('value', v);
}

for (let [k, v] of Object.entries(person)) {
  console.log('key -value', k, v);
}

console.log('**************************');
// different group of datatype
//square brackets
//array -accessing through index
let ages = [89, 90, 24, 78, '67', {}, []];
//starting index 0
//length -3
let fruits = ['Apple', 'Orange', 'Pineapple'];
let persons = [
  {
    fname: 'ram',
    lname: 'kumar',
    mobile: '+90687687',
    age: 12,
  },
  {
    fname: 'ravi',
    lname: 'kumar',
    mobile: '+90687687',
    age: 67,
  },
];
//iterate
for (let i in fruits) {
  console.log('for in ', i, fruits[i]);
}
//for loop
//intialization, condn, inc/dec
for (let i = 0; i < persons.length; i++) {
  // console.log(persons[i], persons[i].fname);
  console.log('element -obj', persons[i]);
  let ele = Object.keys(persons[i]);
  // ["fname","lname","age"]
  for (let k of ele) {
    console.log('for loop', k, persons[i][k]);
  }
}
//array arrow function -ECMA 6
//foreach,filter,some,every,map,reduce
//forEach -iterating the array ele -parameter(each ele, index, array)
// () -more than one parameter else optional
persons.forEach((item, i, arr) => {
  console.log('for each persons', item, i, arr);
});
fruits.forEach((item) => {
  console.log('for each fruits', item);
});

//map -tranformation of data -(items)
//already existing modify & adding new item
//return new array
let modifyPersons = persons.map((item, i) => {
  return {
    id: i + 1,
    firstName: item.fname,
    isEligiblie: item.age > 18 ? true : false,
    fullName: item.fname + item.lname,
  };
});
console.log('map persons', modifyPersons, persons);

let modPersons = persons.map((item, i) => {
  return {
    id: i + 1,
    isEligiblie: item.age > 18 ? true : false,
    fname: item.fname,
    lname: item.lname,
    age: item.age,
    mobile: item.mobile,
  };
});

console.log('map persons existing data', modPersons, persons);

let company = [
  {
    name: 'HCL',
    count: 5000,
    address: { city: 'chennai', pincode: '57687897' },
    colors: ['blue', 'red'],
  },
  {
    name: 'Quartz',
    count: 250,
    address: { city: 'chennai', pincode: '57687897' },
    colors: ['blue', 'red'],
  },
];

let companyDetails = company.map((item, i) => {
  return {
    companyId: i + 1,
    stageLevel: item.count >= 5000 ? 'MNC' : 'Middle-level',
    ...item,
  };
});
console.log('map company spread operators', companyDetails, company);

//spread operator (...)
// value clone - one layer -workout
let language = ['python', 'java'];
// let fav_language = language; //memory copy
let fav_language = [...language];
fav_language[1] = 'Node Js';
console.log(language, fav_language);
