document
  .getElementById("second_message")
  .addEventListener("click", sendMessage2);

// Sending message to the background script.
function sendMessage2() 
{
  const sec_min = parseInt(document.querySelectorAll("input")[1].value);

  chrome.runtime.sendMessage({sec_min, type: "m2" }, function (response) 
  {
    // console.log(response);
  });
}
