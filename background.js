console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);


function buttonClicked(tab) {
  console.log(tab.id);
  chrome.tabs.update(tab.id,{"muted": true});
  chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
    console.log(response);}
  );
  console.log('clicked');
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting === "hello")
      alert("atendeu");
  }
);
