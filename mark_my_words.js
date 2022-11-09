//highlight text
    document.addEventListener('mouseup', event => {  
        if(window.getSelection().toString().length){
        let range = window.getSelection().getRangeAt(0);
        let newNode = document.createElement('span');
        newNode.style.backgroundColor = "rgb(250, 255, 176, .5)";
        range.surroundContents(newNode)     
        }  
    })
