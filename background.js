browser.browserAction.onClicked.addListener(function() {
  browser.tabs.create({url: browser.extension.getURL('markedPages.html')});
});

//Possibly might use
function mark() {
  browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
      let list = [];
      let tab = tabs[0];
      if (list.includes(tabs[0])) {
          list.push(tab);
      }
      document.body.innerHTML = tab.url;
      console.log(tab.url);
  }, console.error);
}

const onCreated = () => {
  if(browser.runtime.lastError) {
    console.log("error creating item", browser.runtime.lastError);
  } else {
    console.log("item created successfully")
  }
}


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

