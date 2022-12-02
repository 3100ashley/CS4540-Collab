//highlight text
function highlightText(color){
  if(window.getSelection().toString().length){
    let range = window.getSelection().getRangeAt(0);
    let newNode = document.createElement('span');
    newNode.style.backgroundColor = color;
    range.surroundContents(newNode)
    browser.runtime.sendMessage("Marked Page", (response) => {console.log(response)}); 
    } 
 }

browser.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request)
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if(request.color !== request.color){
      document.removeEventListener('mouseup',highlightText(request.color))
    }
    document.addEventListener('mouseup',highlightText(request.color))
  }
);
 
 