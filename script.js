document.addEventListener("DOMContentLoaded", () => {
    // Display current time in UTC
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const updateTime = () => {
      const now = new Date();
      currentTimeUTC.textContent = `${now.toUTCString()}`;
    };
    updateTime();
    setInterval(updateTime, 1000);
  });

      // Display current day of the week
    // const currentDay = document.querySelector('[data-testid="currentDay"]');
    // const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const today = new Date().getDay();
    // currentDay.textContent = `Current Day: ${daysOfWeek[today]}`;
  