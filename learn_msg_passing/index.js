document.getElementById("pass").addEventListener("click", sendMessage);



// Sending message to the background script.
function sendMessage()
{
    const minutes = parseInt(document.querySelectorAll("input")[0].value);
    chrome.runtime.sendMessage({minutes, type : "m1"}, function(response) {
        // console.log(response.success);
      });
}
