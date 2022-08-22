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
