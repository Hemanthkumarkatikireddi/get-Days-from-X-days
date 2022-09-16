const addDays = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 7, 20), days);
  return `${newDate.getDay()}-
  ${newDate.getMonth() + 1}-
  ${newDate.getYear()}`;
};

module.exports = getDateAfterXDays;
