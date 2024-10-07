/* Create a function named matchCron, which accepts a valid cron string, and a valid Date. Your function should return true if the pattern matches the Date.

    You only need to implement numbers and *. Other complex patterns are not required.

Only valid patterns will be tested.
Example

matchCron('9 * * * *', new Date('2020-05-30 18:09:00')) // -> true
matchCron('9 * * * *', new Date('2020-05-30 19:09:00')) // -> true
matchCron('9 * * * *', new Date('2020-05-30 19:21:00')) // -> false
         | | | | |
         | | | | +- Day of the Week   (range: 1-7, 1 is Monday)
         | | | +--- Month of the Year (range: 1-12)
         | | +----- Day of the Month  (range: 1-31)
         | +------- Hour              (range: 0-23)
         +--------- Minute            (range: 0-59)
 */

function matchCron(cron, date) {
  const days = {
    0: 7,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
  };
  if (/^[^0-9*]/.test(cron)) {
    return false;
  }
  if (cron.length !== 5) {
    return false;
  }
  const cronSplit = cron.split(" ");
  for (let i = 0; i < cronSplit.length; i++) {
    if (cronSplit[i] !== "*") {
      let num = parseInt(cron[0], 10);
      if (num < 60 && num > -1) {
        if (num === date.getMinutes()) {
          if (hour !== "*") {
            let num = parseInt(cron[1], 10);
            if (num === date.getHours()) {
              if (dayMonth !== "*") {
                let num = parseInt(cron[2], 10);
                if (num === date.getDate()) {
                  if (month !== "*") {
                    let num = parseInt(cron[3], 10);
                    if (num === date.getMonth() + 1) {
                      if (weekday !== "*") {
                        let num = parseInt(cron[4], 10);
                        if (num === days[date.getDay()]) {
                          return true;
                        } else {
                          false;
                        }
                      } else {
                       continue;
                      }
                    }
                  } else {
                    continue;
                  }
                }
              }else {
                continue;
              }
            }
          }else {
            continue;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    }else{
        continue;
    }
  }
}

console.log(matchCron("9 * * * *", new Date("2020-05-30 18:09:00")));
