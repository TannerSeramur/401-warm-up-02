'use strict';

let arr = ['1','2','3','4','5','6','7','8','9','10'];

let forLoop = (arr) => {
  for(let number in arr){
    console.log(number);
  }
};

let whileLoop = (arr) => {
  let i = 0;
  while(i < arr.length){
      console.log(arr[i]);
      i++;
  }
}


let map = (arr, cb) => {
  let newArray = [];
  for(let value in arr ){
    newArray.push(cb(value))
  }
  return newArray;
}

let filter = (arr, cb) => {
  let newArr = [];
  for(let idx in arr){
    if(cb(idx)){
      newArr.push(idx)
    }
  }
  return newArr;
}


// part2
const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = ['odie', ...people, 'garfield'];
const newStuff = {...stuff, cars:[ ...stuff.cars,'subaru']};
let newState = {...people, ...stuff};
