console.log("Backgrond script is working");


// first of all i need to create the alarm and then i need to call it when
// The message will be passed from the index.js to the background and 
// Then i will trigger it.

function createAlarm(min)
{
    // creating alarm in a function for easy access.
    // This will create an alarm and it will be called after "min" minutes.
    chrome.alarms.create("UthaDena", {delayInMinutes:min});

    // Action to be performed after the alarm is called after min minutes.
    chrome.alarms.onAlarm.addListener(alarmNotify);
       
}

// This function will be called when alarm will ring.
function alarmNotify()
{
    console.log("Alarm baj gya uth ja!!");
}


// Here we will create a function for notification .
function notification()
{
    chrome.notifications.create(
        {
            title : "Alarm Notification",
            message : "Wake up its time",
            iconUrl : "my_icon.png",
            type : "basic"
        }
    )
}


// Receiving message from the index.js over here with a value in minutes 
// which will be receinved and passed to the alarm and the alarm will ring after 
// The given minutes by the user.
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) 
    {
      console.log(request.minutes+" minutes ka alarm lga diye bhidu tension not!");
      createAlarm(request.minutes);
      notification();
      sendResponse({success : "Message mil gya bhidu!"});
    }
  );
