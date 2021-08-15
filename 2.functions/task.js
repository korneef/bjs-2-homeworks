// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;  
  let avg;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    };

    if (max < arr[i]) {
      max = arr[i];
    };

    sum = sum + arr[i];  
  };

  avg = +(sum / arr.length).toFixed(2);
  
  return { min:min, max:max, avg:avg };
}

//Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  };

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let maxFunc = func (arrOfArr[i]);
    if (maxFunc > max) {
      max = maxFunc;
    }
  }


  return max;
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    };

    if (max < arr[i]) {
      max = arr[i];
    };
  }

  return Math.abs(max - min);
};