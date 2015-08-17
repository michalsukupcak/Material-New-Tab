(function (document) {
    'use strict';

    /**
     * MODULE: Bookmarks
     *
     * @type {{loadBookmarks: Function}}
     */
    var module_bookmarks = {

        /**
         * Loads bookmarks from Chrome bookmarks, then inserts them into HTML code.
         */
        loadBookmarks: function () {
            chrome.bookmarks.getTree(function (bookmarks) {
                var div = document.getElementById('module_bookmarks');
                var otherBookmarksFolder = bookmarks[0].children[1];
                if (otherBookmarksFolder.title == 'Other bookmarks') {
                    var folder = otherBookmarksFolder.children;
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
                    throw "Folder 'Other bookmarks' is missing in root folder!";
                }
            });
        }

    };

    /**
     * Start bookmarks module.
     */
    module_bookmarks.loadBookmarks();

    /**
     * Click event listener for open all bookmarks button.
     */
    document.getElementById('module_bookmarks_openAll').addEventListener('click', function () {
        chrome.tabs.create({
            url: 'chrome://bookmarks'
        });
    });

})(document);