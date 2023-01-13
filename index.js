// 1. TWO SUM
// Given an array of integers nums and an integer targetreturn indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
/*
SOLUTION
const twoSum = function(nums, target) {
    let indexes =[]
  for(let i =0; i < nums.length; i++){
for(let j= i+1; j < nums.length; j++){
  if(nums[i] + nums[j] ===target){
      indexes.push(i)
      indexes.push(j)
      
  }
}
  }

    return indexes.splice(0, 2)
};
*/

// 2. ADD TWO NUMBERS
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/*SOLUTION
const addTwoNumbers = function (l1, l2) {
  const reversedL1 = [];
  let reversedL2 = [];
  for (let i = 0; i < l1.length; i++) {
    reversedL1.unshift(l1[i]);
  }
  for (let i = 0; i < l2.length; i++) {
    reversedL2.unshift(l2[i]);
  }
  const reverseL1 = reversedL1.join("");
  const reverseL2 = reversedL2.join("");
  const newArr = Number(reverseL1) + Number(reverseL2);
  const output = newArr.toString().split("");
  const reversed = [];
  for (let i = 0; i < output.length; i++) {
    reversed.unshift(output[i]);
  }
  const output2 = [];
  for (let i = 0; i < reversed.length; i++) {
    output2.push(Number(reversed[i]));
  }

  console.log(output2);
};

addTwoNumbers([2, 4, 3], [5, 6, 4]);
*/

// 3. LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
// Given a string s, find the length of the longest substring without repeating characters.
/*SOLUTION 
const lengthOfLongestSubstring = function (s) {
  if (s.length > 0) {
    const box = [];
    for (let i = 0; i < s.length; i++) {
      let container = [s[i]];
      for (let j = i + 1; j < s.length; j++) {
        const checker = container.filter((el) => s[j] === el);
        if (s[i] != s[j] && checker.length === 0) {
          container.push(s[j]);
        } else break;
      }
      box.push(container);
    }
    console.log(box);

    let arrLength = box[0].length;
    console.log(arrLength);
    for (let i = 0; i < box.length; i++) {
      if (box[i].length > arrLength) {
        arrLength = box[i].length;
      }
    }
    console.log(arrLength);
  }
  console.log(0);
};

lengthOfLongestSubstring("");
*/

// 4.MEDIAN OF TWO SORTED ARRAY
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

/*
SOLUTION
const findMedianSortedArrays = function (nums1, nums2) {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  let middle = mergedArray.length / 2 - 1;

  if (middle - Math.floor(middle) !== 0) {
    const middleNum = Math.floor(middle) + 1;
    const median = mergedArray.find((_, index) => {
      return index === middleNum;
    });
    console.log(median);
    return median;
  }
  if (middle - Math.floor(middle) === 0) {
    const firstNum = mergedArray.find((_, index) => middle === index);
    middle++;
    console.log(mergedArray);
    const secondNum = mergedArray.find((_, index) => middle === index);
    const median = (firstNum + secondNum) / 2;
    console.log(median);
    return median;
  }
};
findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7], [3]);

*/
// 4.LONGEST PALINDROMIC SUBSTRING
// Given a string s, return the longest palindromic substring in s. A string is called a palindrome string if the reverse of that string is the same as the original string.

/*
SOLUTION

const longestPalindrome = function (s) {
 UNKNOWN
};

longestPalindrome("babad");

*/

// 5. ZIGZAG CONVERSION
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

/*
SOLUTION
var convert = function (s, numRows) {
 UNKNOWN
};
convert("PAYPALISHIRING", 3);

 */
// 6. REVERSE INTEGER
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

/**
 * SOLUTION
 * var reverse = function (x) {
  const string = String(x).split("").reverse("");

  if (string[0] === "0") {
    let numberOfZeroes = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "0") numberOfZeroes++;
      else break;
    }
    const output = string.splice(0, numberOfZeroes);
    output;
  }
  const output = string.filter((el) => el !== "-").join("");
  output;
  if (string[string.length - 1] === "-") {
    return -1 * +output;
  } else {
    return +output;
  }

  //   return -1 * +string;
  //   else return +string;
};

reverse(-120300);


 */
// const bulb = document.getElementById("image");
// const on = document.getElementById("on");
// const off = document.getElementById("off");

// on.addEventListener("click", function (e) {
//   bulb.src = `assets/pic_bulbon.gif`;
// });
// off.addEventListener("click", function (e) {
//   bulb.src = `assets/pic_bulboff.gif`;
// });

//9.) PALINDROME NUMBER
// Given an integer x, return true if x is a palindrome, and false otherwise.

/*
SOLUTION

 */

// var isPalindrome = function (x) {
//   const textX = x.toString().split("");
//   const not = textX.slice().reverse();
//   let state = true;
//   for (let i = 0; i < not.length; i++) {
//     if (not[i] != textX[i]) {
//       state = false;
//       break;
//     }
//   }
//   console.log(state);
// };
// isPalindrome(121);

/* an array is given return true if there is any duplicate in the array

const containsDuplicate = (nums) => {
  const uniqueArr = new Set(nums);

  if (uniqueArr.size !== nums.length) {
    console.log("failed");
    return false;
  } else {
    console.log("passed");
    return true;
  }
};

containsDuplicate([1, 1, 2, 4]);
*/
/*Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
var isAnagram = function (s, t) {
  if (s.split("").length !== t.split("").length) console.log("failed");
  if (s.split("").sort().join("") === t.split("").sort().join("")) {
    console.log("yes passed");
  } else console.log("failed");
};
isAnagram("anagram", "nagaram");

*/
/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order
const twoSum = function (arr, target) {
  let accumulator = 0;
  for (let i = 0; i < arr.length; i++) {
    accumulator = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] + accumulator === target) {
        console.log(arr[i], arr[j]);
      }
    }
  }
};
twoSum([2, 7, 11, 15], 9);

*/

/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


 
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let str of strs) {
    const s = uniform(str);
    console.log(s);
    let l = map.get(s) || [];

    l.push(str);
    map.set(s, l);
  }
  console.log(Array.from(map.values()));
};

var uniform = function (str) {
  return str.split("").sort().join("");
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
*/

/**  Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 * const arr = [1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 6];

const groupedObj = arr.reduce(
  (prev, current) => ({
    ...prev,
    [current]: [...(prev[current] || []), current],
  }),
  {}
);

const groupedObjToArr = Object.values(groupedObj);
console.log(groupedObjToArr);
 */

/*Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative.

*/
var maximumCount = function (nums) {
  const negativeValues = nums.filter((num) => num < 0);

  const positiveValues = nums.filter((num) => num > 0);
  let a =
    negativeValues.length >= positiveValues.length
      ? negativeValues.length
      : positiveValues.length;
  console.log(a);

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] < 0) negativeValues.push(nums[i]);
  //   else if (nums[i] > 0) positiveValues.push(nums[i]);
  // }
  // if (negativeValues.length > positiveValues.length)
  //   console.log(negativeValues.length);
  // else console.log(positiveValues.length);
};

maximumCount([-2, -1, -1, 1, 2, 3]);
