/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // base case
   if(nums.length < 2) {
    return nums;
   }
    const length = nums.length;
    const half = Math.floor(length / 2);
// break by half
    const first = nums.slice(0, half);
    const second = nums.slice(half);

    const sortedFirst = mergeSort(first);
    const sortedSecond = mergeSort(second);

    return merge(sortedFirst, sortedSecond);
  }

function merge(first, second){
  const result = [];
  
  while(first.length && second.length){
    if(first[0] <= second[0]){
      result.push(first.shift());
    } else {
      result.push(second.shift());
    }
  }

  return result.concat(first, second);
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
