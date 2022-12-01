
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.create({url: browser.extension.getURL('markedPages.html')})
})


// localStorage.setItem('myCat', 'Tom');
// let test = localStorage.getItem('myCat')
// console.log(test)

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
  console.log(browser.menus.id)
  if(browser.runtime.lastError) {
    console.log("error creating item", browser.runtime.lastError);
  } else {
    console.log("item created successfully")
  }
}

browser.menus.create({
  id: "create-note",
  title: "Create Note",
  contexts: ["all"],
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

if(window.getSelection().toString().length){
  let range = window.getSelection().getRangeAt(0);
  console.log(range)
}

browser.menus.onClicked.addListener((info, tab) => {
  console.log(info);
  browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {color: info.menuItemId});
});


    

});