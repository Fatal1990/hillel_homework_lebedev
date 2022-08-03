const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// итерация

const sum = () => {
  let res = 0;
  for (i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
};

console.log(sum());

// итерация for...of

const sum1 = () => {
  let res = 0;
  for (num of arr) {
    res += num;
  }
  return res;
};

console.log(sum1());

//итерация for...in

const sum2 = () => {
  let res = 0;
  for (i in arr) {
    res += arr[i];
  }
  return res;
};

console.log(sum2());

// function map

const sum3 = () => {
  let res = 0;
  arr.map((num) => {
    res += num;
  });
  return res;
};

console.log(sum3());

//function foreach

const sum4 = () => {
    let res = 0;
    arr.forEach((num) => {
      res += num;
    });
    return res;
  };
  
  console.log(sum4());