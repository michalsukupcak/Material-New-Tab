chrome.bookmarks.getTree(function (bookmarks) {
    var div = document.getElementById('module_bookmarks');
    var materialNewTabPageFolder = bookmarks[0].children[1].children[0];
    if (materialNewTabPageFolder.title == 'Material New Tab Page') {
        var folder = materialNewTabPageFolder.children;
        for (var i = 0; i < folder.length; i++) {
            if (i > 0) {
                div.appendChild(document.createElement('hr'));
            }
            var title = folder[i].title;
            var links = folder[i].children;
            var h = document.createElement('h5');
            h.appendChild(document.createTextNode(title));
            div.appendChild(h);
            for (var j = 0; j < links.length; j++) {
                var favicon = document.createElement('img');
                favicon.setAttribute('src', 'chrome://favicon/' + links[j].url);
                var span = document.createElement('span');
                span.appendChild(document.createTextNode(links[j].title));
                var link = document.createElement('a');
                link.className = 'module_bookmarks_link';
                link.setAttribute('target','_blank');
                link.setAttribute('href', links[j].url);
                link.appendChild(favicon);
                link.appendChild(span);
                div.appendChild(link);
            }
        }
    } else {
        throw "Folder 'Material New Tab Page' is missing in root folder of Other Bookmarks!";
    }
});

document.getElementById('module_bookmarks_openAll').addEventListener('click', function () {
    chrome.tabs.create({
        url: 'chrome://bookmarks'
    });
});