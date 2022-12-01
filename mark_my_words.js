

// if(localStorage ){
//   for (var key in localStorage){
//     if(localStorage.getItem(key).startsWith("rgb")){
//       let range = key;
//       let color = localStorage.getItem(key);
//       console.log(color, range)
//     }
//  }
// }

//give spans a class name and call that class name again when page refreshes 

//highlight text
function highlightText(color){
  if(window.getSelection().toString().length){
    let range = window.getSelection().getRangeAt(0);
    let newNode = document.createElement('span');
    newNode.style.backgroundColor = color;
    range.surroundContents(newNode)
    console.log(range)
    localStorage.setItem(range, color);    
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