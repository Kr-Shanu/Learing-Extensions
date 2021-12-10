console.log("Backgrond script is working");

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log("Message received!");

        sendResponse({sucess : true});
    }
  );