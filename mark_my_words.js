//build path of selected node from DOM tree
function getSelectedNodePath(node) {
  const path = [];
  let parentElement;
  // traverse from node to root
  while ((parentElement = node.parentElement)) {
    path.push(Array.prototype.indexOf.call(parentElement.childNodes, node));
    node = parentElement;
  }
  return path;
}
//return node element given array of indices of tree
//localStorage returns array as string and want to convert to array of numbers
function findSelectedNode(path) {
  return path.reduceRight(
    // traverse from root to node
    (parentElement, i) => parentElement.childNodes[i],
    document.documentElement
  );
}

function setBackgroundHighlight(rangeItem, color) {
  let newNode = document.createElement("span");
  newNode.style.backgroundColor = color;
  rangeItem.surroundContents(newNode);
}

function createRangeNode() {
  if (localStorage.getItem(window.location.href)) {
    let highlightedTexts = JSON.parse(
      localStorage.getItem(window.location.href)
    );
    highlightedTexts.forEach((obj) => {
      let range = document.createRange();
      range.setStart(findSelectedNode(obj.startNodePath),obj.startOffSet)
      range.setEnd(findSelectedNode(obj.endNodePath),obj.endOffSet)
      setBackgroundHighlight(range, obj.color)
    });
  }
}

createRangeNode();

//highlight text
function highlightText(color, url) {
  if (window.getSelection().toString().length) {
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);

    let newHighlight = {
      startNodePath: getSelectedNodePath(range.startContainer),
      startOffSet: range.startOffset,
      endNodePath: getSelectedNodePath(range.endContainer),
      endOffSet: range.endOffset,
      color: color,
    };
    let highlightedTexts;
    if(localStorage.getItem(url)){
      highlightedTexts=JSON.parse(localStorage.getItem(url));
      highlightedTexts.push(newHighlight);
    }else {
      highlightedTexts = [newHighlight];
    }

    localStorage.setItem(url, JSON.stringify(highlightedTexts));
    setBackgroundHighlight(range, color);

    browser.runtime.sendMessage("Marked Page", (response) => {
      console.log(response);
    });
  }
}

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.color !== request.color) {
    document.removeEventListener(
      "mouseup",
      highlightText(request.color, request.highlightedURL)
    );
  }
  document.addEventListener(
    "mouseup",
    highlightText(request.color, request.highlightedURL)
  );
});
