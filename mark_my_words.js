if(localStorage.length){
  for (let i = 0; i < localStorage.length; i++) {
    let range = localStorage.getItem(localStorage.key(i)).textRange;
    let color = localStorage.getItem(localStorage.key(i)).textColor;
    let newNode = document.createElement('span');
    newNode.style.backgroundColor = color;
    range.surroundContents(newNode) 
  }
}



//highlight text
function highlightText(color){
  document.addEventListener('mouseup', event => {  
    if(window.getSelection().toString().length){
    let range = window.getSelection().getRangeAt(0);
    let newNode = document.createElement('span');
    newNode.style.backgroundColor = color;
    range.surroundContents(newNode) 
    localStorage.setItem(range, {textRange:range, textColor: color });    
    }  
  })
}


  browser.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      console.log(request.color)
      highlightText(request.color)
      
    }
  );