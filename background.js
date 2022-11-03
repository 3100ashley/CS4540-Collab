console.log("background running");

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
