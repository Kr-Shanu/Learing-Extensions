document.querySelector("button").addEventListener("click", sendMessage);

function sendMessage()
{
    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
        console.log(response);
      });
}