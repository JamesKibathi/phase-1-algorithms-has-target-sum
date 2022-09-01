function hasTargetSum(array, target) {
  // Write your algorithm here



  for(let i=0; i< array.length;i++){

    for(let j=i+1;j< array.length;j++){


      if(array[i]+array[j]===target){

        return true;
     

      }
    }
  }
  return false;
}

let ans=hasTargetSum([1, 2, 5]  ,4);

console.log(ans);





//console.log (ans);


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  First loop through the array starting at index zero
     Run a second loop begining at index 1 and compare the two elements if they add up to sum
        If the elements sum is equal to target return true
            else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;


