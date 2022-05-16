const START = '2022-03-29';
const DAY = 86400 * 1000;
const prefix0 = n => (n < 10 ? `0${n}` : n);
const getTime = string => new Date(string).getTime();
const dom = id => document.getElementById(id);

handleDate();
handleDays();
handleDiff();

function handleDate() {
  const dateInput = dom('date');
  const dateSubmit = dom('dateSubmit');
  const dateResult = dom('dateResult');
  const calculateFn = () =>
    (dateResult.innerHTML = getDaysByDate(dateInput.value));
  calculateFn();
  dateSubmit.addEventListener('click', calculateFn);
}

function handleDays() {
  const daysInput = dom('days');
  const daysSubmit = dom('daysSubmit');
  const daysResult = dom('daysResult');
  const calculateFn = () =>
    (daysResult.innerHTML = getDateByDays(daysInput.value));
  calculateFn();
  daysSubmit.addEventListener('click', calculateFn);
}

function handleDiff() {
  const diffInput1 = dom('diff1');
  const diffInput2 = dom('diff2');
  const isCover = dom('isCover');
  const diffSubmit = dom('diffSubmit');
  const diffResult = dom('diffResult');
  const calculateFn = () =>
    (diffResult.innerHTML = diff(
      diffInput1.value,
      diffInput2.value,
      isCover.checked
    ));
  calculateFn();
  diffSubmit.addEventListener('click', calculateFn);
}

/** 工具函数 */
function diff(start, end, isCoverStart = false) {
  const startDate = getTime(start);
  const endDate = getTime(end);
  const plus = isCoverStart ? 1 : 0;
  return (endDate - startDate) / DAY + plus;
}

function getDateByDays(days) {
  const endDate = new Date(getTime(START) + (days - 1) * DAY);
  const year = endDate.getFullYear();
  const month = prefix0(endDate.getMonth() + 1);
  const date = prefix0(endDate.getDate());
  return `${year}-${month}-${date}`;
}

function getDaysByDate(end) {
  return diff(START, end, true);
}

function assert() {
  const date1 = '2022-07-05';
  const days1 = getDaysByDate(date1);
  console.assert(getDateByDays(days1) === date1, 'getDateByDays success');

  const days2 = 200;
  const date2 = getDateByDays(days2);
  console.assert(getDaysByDate(date2) === days2, 'getDaysByDate success');

  const date3 = '2020-02-28';
  const date4 = '2020-03-01';
  console.assert(diff(date3, date4) === 2, 'diff success');
  console.assert(diff(date3, date4, true) === 3, 'diff coverStart success');
}

assert();

console.log(diff('1997-06-24', '2001-10-23'));

console.log(getDateByDays(100));

console.log(getDaysByDate('2001-10-23'));
console.log(getDaysByDate('2021-10-12'));
console.log(getDaysByDate('2022-10-02'));
