// Solution 1 using Date constructor
// const fs = require('fs');
// function showYearMonthDayHour(year) {
//   try {
//     const finalResult = [];
//     let date = new Date(year, 0, 1);
//     for (let month = 0; month < 12; month++) {
//       let newdate = new Date(year, month + 1, 0);
//       for (let day = 1; day <= newdate.getDate(); day++) {
//         for (let hour = 0; hour <= 23; hour++) {
//           let result = `year=${date.getFullYear()}, month='${(month + 1).toString().padStart(2, "0")}', day='${day.toString().padStart(2, "0")}', hour='${hour.toString().padStart(2, "0")}'`;
//           finalResult.push(result);
//         }
//       }
//     }
//     fs.writeFileSync('data.json', JSON.stringify(finalResult, null, 2), 'utf-8');
//     return "File created";
//   } catch (err) {
//     throw new Error("An error occurred!");
//   }
// }
// console.log(showYearMonthDayHour(2023));


// Solution 2 using moment npm package
const moment = require('moment');
const fs = require('fs');
function showYearMonthDayHour(year) {
  try {
    const finalResult = [];
    for (let month = 0; month < 12; month++) {
      let startMonth = moment().month(month);
      for (let day = 1; day <= startMonth.daysInMonth(); day++) {
        let startDay = startMonth.date(day);
        for (let hour = 0; hour <= 23; hour++) {
          let startHour = startDay.hour(hour);
          let result = `year=${startMonth.year()}, month='${startMonth.format('MM')}', day='${startDay.format('DD')}', hour='${startHour.format('HH')}'`;
          finalResult.push(result);
        }
      }
    }
    fs.writeFileSync('data.json', JSON.stringify(finalResult, null, 2), 'utf-8');
    return "File created";
  } catch (err) {
    throw new Error("An error occurred!");
  }
}
console.log(showYearMonthDayHour(2023));

