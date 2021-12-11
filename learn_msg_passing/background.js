console.log("Backgrond script is working");

// first of all i need to create the alarm and then i need to call it when
// The message will be passed from the index.js to the background and
// Then i will trigger it.

function createAlarm(min) {
  // creating alarm in a function for easy access.
  // This will create an alarm and it will be called after "min" minutes.
  chrome.alarms.create("UthaDena", { delayInMinutes: min });

  // Action to be performed after the alarm is called after min minutes.
  chrome.alarms.onAlarm.addListener(alarmNotify);
}

// This function will be called when alarm will ring.
function alarmNotify() {
  console.log("Uth ja , times up!!!");
}

// Receiving message from the index.js over here with a value in minutes
// which will be receinved and passed to the alarm and the alarm will ring after
// The given minutes by the user.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) 
{
  if (request.type === "m1") 
  {
    console.log("First request received!!");
    console.log(request.minutes + " minutes ka alarm lga diye bhidu tension not!");
    createAlarm(request.minutes);
    sendResponse({ success: "Message mil gya bhidu!" });
  } 
  else if (request.type === "m2") {
    console.log("Second request received!!");
    sendResponse({ got: "Sending response of the second " });
  }
});
