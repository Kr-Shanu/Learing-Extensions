document.querySelector("button").addEventListener("click", sendMessage);


// Sending message to the background script.
function sendMessage()
{
    const minutes = parseInt(document.querySelector("input").value);
    chrome.runtime.sendMessage({minutes}, function(response) {
        console.log(response.success);
      });
}
