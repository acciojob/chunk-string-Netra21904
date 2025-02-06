function stringChop(str, size) {
  if (str === null || str === undefined) {  // Handle null or undefined input
    return [];
  }

  if (typeof size !== 'number' || size <= 0) { //Handle invalid chunk size
    return [];
  }

  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.substring(i, i + size));
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
