function countdownTimer(startTime, interval) {
  let currentTime = startTime; // Keep track of remaining time
  
  // Show the starting number
  console.log(currentTime);
  
  // Set up the countdown interval
  const timer = setInterval(() => {
    currentTime = currentTime - 1; // Decrement by 1 each time
    
    if (currentTime > 0) {
      console.log(currentTime);
    } else {
      console.log("Time's up!"); // Added a completion message
      clearInterval(timer);
    }
  }, interval);
  
  // Return the timer ID in case we need to stop it early
  return timer;
}

// Export the function
module.exports = { countdownTimer };