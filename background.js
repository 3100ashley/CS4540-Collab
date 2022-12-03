browser.browserAction.onClicked.addListener(function() {
  browser.tabs.create({url: browser.extension.getURL('markedPages.html')});
  browser.storage.sync.set({'URL' : list});
});

let list = [];
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
  let link = sender.url;
  if(!list.includes(link)) {
    list.push(link);
  }
  sendResponse("Marked");
})


const onCreated = () => {
  if(browser.runtime.lastError) {
    console.log("error creating item", browser.runtime.lastError);
  } else {
    console.log("item created successfully")
  }
}

browser.menus.create({
  id: "create-note",
  title: "Create Note",
  contexts: ["selection"],
}, onCreated);


browser.menus.create({
  id: "rgb(44, 242, 44,.5)",
  type: "radio",
  title: "Green",
  contexts: ["all"],
  checked: false
}, onCreated)

browser.menus.create({
  id: "rgb(248, 255, 38,.5)",
  type: "radio",
  title: "Yellow",
  contexts: ["all"],
  checked: false
}, onCreated)


browser.menus.create({
  id: "rgb(33, 245, 252,.5)",
  type: "radio",
  title: "Blue",
  contexts: ["all"],
  checked: false
}, onCreated)

browser.menus.create({
  id: "rgb(255, 77, 243,.5)",
  type: "radio",
  title: "Pink",
  contexts: ["all"],
  checked: false
}, onCreated)

//send message when color is chose for highlight
browser.menus.onClicked.addListener((info, tab) => {
  browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {color: info.menuItemId, highlightedURL: info.pageUrl});
  });
});
