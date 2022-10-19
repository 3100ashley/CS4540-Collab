function border() {
    document.body.style = "border: 4px solid green;"
}

browser.runtime.onMessage.addListener((message) => {
    console.log("no message")
    if(message.action === "test"){
        console.log(message.action)
        border();
    }
})