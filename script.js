/*

const timeContainer = document.getElementById("time-container");
const BIRTH_DAY = "12-09-2022";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");




    setInterval(() => {
      const now = new Date();
      const difference = Math.floor(
        (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
      );

      timeContainer.innerText = intlNumberFormatter.format(difference);
    }, 1000);
*/
    



    // Get a reference to the time container span element
const timeContainer = document.getElementById('time-container');

// Set the start time
const startTime = new Date();

// Update the time every second
setInterval(() => {
  // Calculate the difference in seconds between the start time and now
  const diffInSeconds = Math.round((new Date() - startTime) / 1000);

  // Update the text of the time container span element
  timeContainer.textContent = diffInSeconds;
}, 1000);

