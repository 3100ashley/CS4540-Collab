browser.storage.sync.get('URL', function(data) {
    document.write("<h1>Marked Pages</h1>");
    for(i = 0; i < data.URL.length; i++) {
        document.write("<li>" + data.URL[i] + "</li>");
    }
});