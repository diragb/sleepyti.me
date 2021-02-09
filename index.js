const wakeupTime = new Date(); wakeupTime.setHours(6); wakeupTime.setMinutes(0);
const r1 = new Date(wakeupTime.getTime() - 270*60000);
const r2 = new Date(r1 - 90*60000);
const r3 = new Date(r2 - 90*60000);
const r4 = new Date(r3 - 90*60000);
const results = [r1, r2, r3, r4];

results.forEach(dateObj => {
 let formatted = '';
 let pm = false;
 if (dateObj.getHours() > 12) {
   formatted = dateObj.getHours() - 12;
   pm = true;
 } else if (dateObj.getHours() < 12 && dateObj.getHours() != 0) {
   formatted = dateObj.getHours();
 } else if (dateObj.getHours() == 0) {
 formatted = "12";
 } else if (dateObj.getHours() == 12) {
   formatted = "12";
   pm = true;
 }
 if (dateObj.getMinutes() < 10) {
   formatted = formatted + ":0" + dateObj.getMinutes();
 } else {
   formatted = formatted + ":" + dateObj.getMinutes();
 }
 if (pm == true) {
   formatted = formatted + " PM";
 } else {
   formatted = formatted + " AM";
 }
 console.log(formatted);
});

// Congrats, now you can get featured on CNET, the NYT, Business Insider, Entrepreneur, LifeHacker, MTV, LawdaLehsun Network, etc.
