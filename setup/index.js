// console.log('Hello World');

const firstName = "gagan";
const lastName = "10";
const fullName = firstName + " " + lastName;
// console.log(fullName);

// Search an element in an array and returns the index
// if it's not there, return -1

const arr = [4, 2, 0, 10, 8, 30];

//searchElement fn

const searchElement = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      // console.log('found at index: '+i);
      return i;
    }
  }
  // console.log('element not found');
  return -1;
};

const result = searchElement(arr, 10);

console.log(result);

// Write a function that returns then number of negative numbers in an array

const countNegatives = (array) => {
  let counter = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      counter++;
    }
  }
  return counter;
};

const arr_2 = [2, 4, -1, 0, -4, 7, -9, -10, 20, -33];

const neg_count_res = countNegatives(arr_2);

console.log(neg_count_res);

/*
Write a function to return highest/largest number in the array
*/

//**least numerical value in JS is '-Infinity'
//**highest numerical value in JS is 'Infinity'

const largestElement = (array) => {
  // Assigning least possible value to the largest as per JS
  // let largest = -Infinity;
  // OR
  //assigning first element of array
  let largest = array[i];
  for (let i = 0; i < array.length; i++) {
    if (largest < array[i]) {
      largest = array[i];
    }
  }
  return largest;
};

const arr_3 = [-1, 2, 5, 8, 10, 3, 30, 15, 50, 35, 100, 70,99];
const res_largest = largestElement(arr_3);
console.log(res_largest);

// **Smallest Number
const smallestElement = (array) => {
  let smallest = array[i];
  for (let i = 0; i < array.length; i++) {
    if (smallest > array[i]) {
      smallest = array[i];
    }
  }
  return smallest;
};

const res_smallest = smallestElement(arr_3);
console.log(res_smallest);


/* SECOND Largest Number */

const secLargestElement = (array) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  //corner cases**
  if(array.length == 0){
    return null
  }
  if (array.length < 2) {
    largest = array[0];
    return null
  }
  if (array.length == 2){
    if (array[0] > array[1]) {
      secondLargest = array[1]
      return secondLargest
    }
    else {
      secondLargest = array[0]
      // console.log('short route')
      return secondLargest
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (largest < array[i]) {
      secondLargest = largest;         
      largest = array[i];
    }
    else if(secondLargest < array[i] && array[i] != largest){
      secondLargest = array[i]
    }
  }
  return secondLargest;
};
//const arr_4 = [];
// const arr_4 = [1];
// const arr_4 = [1,2];
const arr_4 = [1,2,8,12,34,90,112,-900,22,112];


const res_sec_largest = secLargestElement(arr_4);
console.log(res_sec_largest);

/*
CORNER CASES -

Array is empty
Array has negative numbers
Array has duplicates
*/