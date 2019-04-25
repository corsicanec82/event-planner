const makeCaledar = () => {
  const content = document.getElementById('content');

  const calendar = document.createElement('div');
  calendar.setAttribute('class', 'calendar');

  for (let trCounter = 0; trCounter < 5; trCounter += 1) {
    const tr = document.createElement('div');
    calendar.appendChild(tr);
    for (let tdCounter = 0; tdCounter < 7; tdCounter += 1) {
      const td = document.createElement('div');
      td.innerHTML = tdCounter;
      tr.appendChild(td);
    }
  }

  content.appendChild(calendar);
};

document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    makeCaledar();
  }
};
