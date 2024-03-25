function createElement(data) {
    var paragraphe = document.createElement('p')
    paragraphe.textContent = data
    document.body.appendChild(paragraphe);
}

function queryWikipedia(callback) {
    
    const xhr = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(xhr.responseText);
            const pages = response.query.pages;
            const pageid = Object.keys(response.query.pages)[0];
            const text = pages[pageid].extract; 
            callback(text);
        };
    };
    xhr.open("GET", url, true); 
    xhr.send();
}

queryWikipedia(createElement);
