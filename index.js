// ! Dont change this code
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// @ Try to check and change the filterOddNumber function
// Ex: given param = [1, 2, 3, 4, 5], then return must [2, 4] not "1,3,5"

const filterOddNumber = (arr) => {
  return arr.filter((num) => num % 2 === 0)
};
/**
 * karena data yang difilter berupa data ganjil dan alhasil data yang dikembalikan berupa array ganjil ketika diujikan akan error sehingga diubah ke filter genap
 * kemudian data yang sudah difilter akan dijadikan sebagai string, ini akan error ketika diujikan sehingga cukup membuangnya saja
 */

// ! Dont change this code
const epochDateToUTC = (epochDate) => {
  const d = new Date(0);
  d.setUTCSeconds(epochDate);
  return d.toUTCString();
};

// ! Dont change this code
module.exports = {
  capitalize,
  filterOddNumber,
  epochDateToUTC,
};
