/**
 * 生成 30天，每天200条数据，共计6000条日程数据
 */
/** 多少天的数据 */
const DAY_NUM = 30;
/** 每天多少条数据 */
const ITEMS_PER_DAY = 200;
/** 是否包含今天的数据 */
const isHasToday = true;

const COLOR_LIST = [
  { color: 'blue', name: 'blue' },
  { color: 'red', name: 'red' },
  { color: 'pink', name: 'pink' },
  { color: 'orange', name: 'orange' },
  { color: 'purple', name: 'purple' },
  { color: 'gray', name: 'gray' },
  { color: 'green', name: 'green' },
  { color: 'fuchsia', name: 'fuchsia' },
  { color: 'peach', name: 'peach' },
  { color: 'skyblue', name: 'skyblue' }
];

const numberAddZeroPrefix = number => {
  const prefix = number > 9 ? '' : '0';
  return prefix + number;
};

const getTodayString = () => ({
  year: `${new Date().getFullYear()}`,
  month: numberAddZeroPrefix(new Date().getMonth() + 1),
  date: numberAddZeroPrefix(new Date().getDate())
});

const getTomorrowDateAndMonth = (month, date) => {
  if (month < 1 || month > 12 || date < 1 || date > 31) return;
  const bigMonth = [1, 3, 5, 7, 8, 10, 12];
  const smallMonth = [4, 6, 9, 11];
  let dateLimit = 0;
  if (bigMonth.includes(month)) {
    dateLimit = 31;
  } else if (smallMonth.includes(month)) {
    dateLimit = 30;
  } else if (month === 2) {
    dateLimit = 28;
  }
  return {
    month: date >= dateLimit ? month + 1 : month,
    date: date >= dateLimit ? 1 : date + 1
  };
};

const create30DaysDateList = () => {
  const list = [];
  let { year, month } = getTodayString();
  const today = new Date().getDate();
  let date = numberAddZeroPrefix(isHasToday ? today : today + 1);
  for (let i = 0; i < DAY_NUM; i++) {
    list.push(`${year}-${month}-${date}`);
    const { month: nextMonth, date: nexDate } = getTomorrowDateAndMonth(
      parseInt(month),
      parseInt(date)
    );
    month = numberAddZeroPrefix(nextMonth);
    date = numberAddZeroPrefix(nexDate);
  }
  return list;
};

const create200ScheduleItems = (date, dayIndex) => {
  const list = [];
  const { year, month, date: today } = getTodayString();
  const todayString = `${year}-${month}-${today}`;
  const todayStartTime =
    todayString === date
      ? new Date().getTime() + 30 * 60 * 1000
      : new Date(date).getTime();
  for (let i = 0; i < ITEMS_PER_DAY; i++) {
    list.push({
      createTime: todayStartTime + i,
      createId: Math.floor(Math.random() * 1000000000),
      description: `${todayString}的描述`,
      location: {
        name: `第${dayIndex + 1}天的第${i + 1}个地点测试`
      },
      endTime: todayStartTime + (i + 1) * 60000,
      startTime: todayStartTime + i * 60000,
      title: `第${dayIndex + 1}天第${i + 1}条测试-${date}`,
      labelColor: COLOR_LIST[i % 10].color
    });
  }
  return list;
};

const createFinalData = () => {
  const map = {};
  const dateList = create30DaysDateList();
  dateList.forEach((date, dateIndex) => {
    map[date] = {
      count: 200,
      list: create200ScheduleItems(date, dateIndex)
    };
  });
  return map;
};

const createData = (hasColor = false) => {
  const colorList = hasColor
    ? {
        colorList: COLOR_LIST
      }
    : null;
  return {
    scheduleList: createFinalData(),
    todoList: {},
    ...colorList
  };
};

const render = () => {
  const data = createData(true);
  const container = document.querySelector('#container');
  const ul = document.createElement('ul');
  const { scheduleList, colorList = null } = data;
  for (let date in scheduleList) {
    const li = document.createElement('li');
    const scheduleUl = document.createElement('ul');
    li.className = 'schedule-wrap';
    li.textContent = date;
    const schedule = scheduleList[date].list;
    for (let i = 0; i < schedule.length; i++) {
      const scheduleLi = document.createElement('li');
      const scheduleItem = schedule[i];
      scheduleLi.textContent = scheduleItem.title;
      scheduleLi.className = 'schedule-item';
      scheduleLi.style = `color:${scheduleItem.labelColor}`;
      scheduleUl.appendChild(scheduleLi);
    }
    li.appendChild(scheduleUl);
    ul.appendChild(li);
  }
  container.appendChild(ul);
};

render();
