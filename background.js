browser.browserAction.onClicked.addListener(async () => {
  const tabs = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });

  browser.tabs.sendMessage(tabs[0].id, { action: "test" });
});

console.log("extension loaded!");





browser.menus.onClicked.addListener((info, tab) => {
  if(info.menuItemId === "save-text"){
    console.log(info.selectionText);
  }
})


const onCreated = () => {
  if(browser.runtime.lastError) {
    console.log("error creating item", browser.runtime.lastError);
  } else {
    console.log("item created successfully")
  }
}

browser.menus.create({
  id: "save-text",
  title: "Highlight Text",
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
