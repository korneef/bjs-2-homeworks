function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  "use strict"
  arr = []
  let d;
  d = Math.pow(b, 2) - (4 * a * c);

  if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d < 0) {
    arr = [];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  "use strict"

  if (isNaN(+percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
  } else if (isNaN(+contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
  } else if (isNaN(+amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
  };
  percent = +percent;
  contribution = +contribution;
  amount = +amount;

  let today = new Date;
  let months;
  months = (date.getFullYear() - today.getFullYear()) * 12;
  months += date.getMonth();
  months -= today.getMonth();
  
  let creditBody = amount - contribution;
  percent = (percent/100/12);
  let monthPaymet;
  monthPaymet = creditBody * (percent + percent / (((1 + percent)**months) - 1));
  totalAmount = +(monthPaymet * months).toFixed(2);
  return totalAmount;
}