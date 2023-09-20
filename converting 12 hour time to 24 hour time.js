// Converting 12-hour time to 24-hour time
// Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it! You will have to define a function, which will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either a.m. or p.m.) as input. Your task is to return a four-digit string that encodes that time in 24-hour time.

// My solution
function to24hourtime(hour, minute, period) {
  if (period == "am" && hour == 12) {
    let hour = 0
    return hour.toString().padStart(2, '0') + minute.toString().padStart(2, '0');
  } else if (period == "pm" && hour == 12) {
    let hour = 12
    return hour.toString().padStart(2, '0') + minute.toString().padStart(2, '0');
  } else if (period == "am") {
    return hour.toString().padStart(2, '0') + minute.toString().padStart(2, '0');
  } else {
    let pm = hour + 12;
    return pm.toString().padStart(2, '0') + minute.toString().padStart(2, '0');
  }
}

// Best solution
function to24hourtime(hour, minute, period) {
  if (period === "am" && hour === 12) {
    hour = 0;
  } else if (period === "pm" && hour !== 12) {
    hour += 12;
  }
  return hour.toString().padStart(2, "0") + minute.toString().padStart(2, "0");
}