// Merging sorted integer arrays (without duplicates)
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// My solution
function mergeArrays(arr1, arr2) {
  const merged = arr1.concat(arr2);
  return merged.filter((item, index) => merged.indexOf(item) === index).sort((a, b) => a - b);
}

// Best solutions
function mergeArrays(a, b) {
  let merge = [...a, ...b].sort()
  let unique = new Set(merge)
  return Array.from(unique).sort((a, b) => a - b)
}

function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a, b) => a - b);
}