document.addEventListener("DOMContentLoaded", () => {
    // Display current time in UTC
    const currentUTCTime = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const updateTime = () => {
      const now = new Date();
      currentUTCTime.textContent = `${now.toUTCString()}`;
    };
    updateTime();
    setInterval(updateTime, 1000);

    const today = new Date().getDay();
    currentDay.textContent = `Current Day: ${daysOfWeek[today]}`;
  });

   

    
  