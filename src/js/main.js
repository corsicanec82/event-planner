const makeCaledar = () => {
  const content = document.getElementById('content');

  const calendar = document.createElement('table');
  calendar.setAttribute('class', 'calendar');

  for (let trCounter = 0; trCounter < 5; trCounter += 1) {
    const tr = document.createElement('tr');
    calendar.appendChild(tr);

    for (let tdCounter = 0; tdCounter < 7; tdCounter += 1) {
      const td = document.createElement('td');
      tr.appendChild(td);

      const div = document.createElement('div');
      div.setAttribute('class', 'content');
      td.appendChild(div);
      div.innerHTML = tdCounter;
    }
  }

  content.appendChild(calendar);
};

document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    makeCaledar();
  }
};
