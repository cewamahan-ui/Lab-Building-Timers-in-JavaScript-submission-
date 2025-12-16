function recurringTimer(message, interval) {

  const timerId = setInterval(() => {
    console.log(message);
  }, interval);
  
  return timerId;
}

function stopRecurringTimer(timerId) {
  clearInterval(timerId);
  return true;
}

module.exports = { recurringTimer, stopRecurringTimer };