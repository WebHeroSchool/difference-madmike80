function difference(array1, array2) {
let result = array1.filter(elem => !array2.includes(elem));

return result;
}

module.exports = difference;
