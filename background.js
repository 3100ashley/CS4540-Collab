browser.browserAction.onClicked.addListener(function() {
  browser.tabs.create({url: browser.extension.getURL('markedPages.html')});
  console.log(list);
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
  id: "green",
  type: "radio",
  title: "Green",
  contexts: ["all"],
  checked: false
}, onCreated)

browser.menus.create({
  id: "yellow",
  type: "radio",
  title: "Yellow",
  contexts: ["all"],
  checked: false
}, onCreated)


browser.menus.create({
  id: "blue",
  type: "radio",
  title: "Blue",
  contexts: ["all"],
  checked: false
}, onCreated)

browser.menus.create({
  id: "red",
  type: "radio",
  title: "Magenta",
  contexts: ["all"],
  checked: false
}, onCreated)

