browser.browserAction.onClicked.addListener(function() {
  browser.tabs.create({url: browser.extension.getURL('markedPages.html')});
});

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
  // console.log(sender.url);
  let link = sender.url;
  sessionStorage.setItem("Marked Page", link);
  sendResponse("Marked");
  // sendToContent();
})



function sendToContent() {
  // let page = document.getElementById("Links");
  let webpage = sessionStorage.getItem("Marked Page");
  // console.log(page);
  // document.write("URL: " + webpage + "<br />");
  // console.log(webpage);
  // page.innerHTML = "URL: " + webpage + "<br />";
}

// Tests
// browser.tabs.onActivated.addListener(getTabs);

// function getTabs() {  
//     browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
//       let tab = tabs[0];
//           // list.push(tab);
//       // document.body.innerHTML = tab.url;
//       console.log("URL: " + tab.url);
//       // for(i = 0; i < list.length; i++) {
//       //   console.log("List: " + JSON.stringify(list[i].url, null, 2));
//       // }
//   }, console.error);
// }

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

