let emp={id:111,name:"Anand"}

// let keys=Object.keys(emp)
// console.log(keys);

// let values=Object.values(emp)
// console.log(values);

// let entries=Object.entries(emp)
// console.log(entries);

// //freeze method-no add remove update
// //Object.freeze(emp)
// emp.id=123;
// delete emp.name;
// console.log(emp);

// //seal method- Update Allowed
// Object.seal(emp)
// emp.id=1234
// console.log(emp);

//create new object using existing object
let n= Object.assign(emp,{salary:5000000})
console.log(n);


