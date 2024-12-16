document.getElementById('task1').addEventListener('click', task1);
document.getElementById('task2').addEventListener('click', task2);
document.getElementById('task3').addEventListener('click', task3);
document.getElementById('task4').addEventListener('click', task4);

//задание 1
function task1() {
  const arr = Array.from({length: 15}, () => Math.floor(Math.random() * 41) - 10); 
  const positiveNums = arr.filter(num => num > 0);
  const avg = positiveNums.reduce((sum, num) => sum + num, 0) / positiveNums.length || 0; 
  document.getElementById('task1Result').textContent = `Массив: ${arr}, Среднее положительных: ${avg}`;
}


//Задание 2
function task2() {
  const n = 15; 
  const arr = Array.from({length: n}, () => Math.floor(Math.random() * 21) - 10); // числа от -10 до 10
  const newArr = arr.map(num => num < 0 ? num * num : num);
  document.getElementById('task2Result').textContent = `Исходный массив: ${arr}, Массив после замены: ${newArr}`;
}

//Задание 3
function task3() {
  const n = 15; 
  const arr = Array.from({length: n}, () => Math.floor(Math.random() * 21) - 10); // Случайные числа от -10 до 10

  const positiveNums = arr.filter(num => num > 0);
  const negativeNums = arr.filter(num => num < 0);
  const zeros = arr.filter(num => num === 0).length;

  const avgPositive = positiveNums.length > 0 ? positiveNums.reduce((a, b) => a + b, 0) / positiveNums.length : 0;
  const avgNegative = negativeNums.length > 0 ? negativeNums.reduce((a, b) => a + b, 0) / negativeNums.length : 0;

  document.getElementById('task3Result').textContent = `Массив: ${arr}, 
                                                        Среднее положительных: ${avgPositive}, 
                                                        Среднее отрицательных: ${avgNegative}, 
                                                        Количество нулей: ${zeros}`;
}


//Задание 4 
function task4() {
  const numTrials = 1000000;
  const results = [];
  for (let i = 0; i < numTrials; i++) {
    results.push(Math.floor(Math.random() * 3));
  }

  const redCount = results.filter(x => x === 0).length;
  document.getElementById('task4Result').textContent = `Максимальное число выпадений красного: ${redCount}`;
}
