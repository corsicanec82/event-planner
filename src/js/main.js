const daysRU = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

const getStartDate = () => {
  const dateNow = new Date(Date.now());
  const beginMonth = new Date(dateNow.getFullYear(), dateNow.getMonth(), 1);
  beginMonth.setDate(beginMonth.getDate() - (beginMonth.getDay() - 1));
  return beginMonth;
};

const getDate = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate.getDate();
};

const getCurrentDate = () => {
  const dateNow = new Date(Date.now());
  return dateNow.getDate();
};

const makeCaledar = () => {
  const content = document.getElementById('content');

  const calendar = document.createElement('table');
  calendar.setAttribute('class', 'calendar');

  const startDate = getStartDate();
  const currentDate = getCurrentDate();
  for (let trCounter = 0; trCounter < 5; trCounter += 1) {
    const tr = document.createElement('tr');
    calendar.appendChild(tr);

    for (let tdCounter = 0; tdCounter < 7; tdCounter += 1) {
      const day = getDate(startDate, tdCounter + (trCounter * 7));
      const date = trCounter === 0 || day === currentDate ? `${daysRU[tdCounter]}, ${day}` : day;

      const td = document.createElement('td');
      tr.appendChild(td);

      const div = document.createElement('div');
      div.setAttribute('class', 'content');
      td.appendChild(div);

      const span = document.createElement('span');
      if (day === currentDate) {
        span.setAttribute('class', 'current_date');
      }
      div.appendChild(span);
      span.innerHTML = date;
    }
  }

  content.appendChild(calendar);
};

document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    makeCaledar();
  }
};
