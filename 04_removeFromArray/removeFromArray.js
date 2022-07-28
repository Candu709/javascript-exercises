const removeFromArray = function(original,...targets) {
  let filtered = original;
  for (const target of targets) {
    filtered = filtered.filter(element => element !== target)
  }
  return filtered
};

// Do not edit below this line
module.exports = removeFromArray;
