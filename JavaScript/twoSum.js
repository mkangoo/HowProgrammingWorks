const twoSum = (nums, total) => {
  const previousValues = {}
  for (let i = 0; i < nums.length; i++) {
    const diff = total - nums[i]
    if (Object.prototype.hasOwnProperty.call(previousValues, diff)) {
      return [previousValues[diff], i]
    }
    previousValues[nums[i]] = i
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9)) // [1, 3]
console.log(twoSum([3, 3, 12, 20, 12, 9], 6)) // [0, 1]


// var twoSum = function (nums, target) {
//   let map = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i]
//     if (map.has(complement)) return [map.get(complement), i]
//     map.set(nums[i], i)
//   }
// }