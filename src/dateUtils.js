const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getDayName(date) {
  let d = new Date(date);
  return days[d.getDay()];
}

export { getDayName }