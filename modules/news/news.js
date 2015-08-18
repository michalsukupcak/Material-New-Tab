(function (document) {
    'use strict';

    /**
     * MODULE: News
     *
     * @type {{loadNews: Function}}
     */
    var module_news = {

        loadNews: function () {
            var newsDiv = document.getElementById('module_news');
            google.load("feeds", "1");
            google.setOnLoadCallback(function () {
                var feed = new google.feeds.Feed('https://news.google.com/news?cf=all&hl=en&pz=1&ned=us&topic=sfy&output=rss');
                feed.load(function (data) {
                    var entries = data.feed.entries;
                    for (var i = 0; i < entries.length; i++) {
                        var entry = entries[i];
                        var news = document.createElement('div');
                        var newsTitle = document.createElement('div');
                        var newsSnippet = document.createElement('div');
                        var newsLink = document.createElement('a');
                        news.setAttribute('class', 'news');
                        newsTitle.appendChild(document.createTextNode(entry.title));
                        newsTitle.setAttribute('class', 'newsTitle');
                        newsSnippet.appendChild(document.createTextNode(entry.contentSnippet));
                        newsSnippet.setAttribute('class', 'newsSnippet');
                        newsLink.appendChild(document.createTextNode("Open article"));
                        newsLink.setAttribute('href', entry.link);
                        newsLink.setAttribute('class', 'newsLink');
                        newsLink.setAttribute('target', '_blank');
                        news.appendChild(newsTitle);
                        news.appendChild(newsSnippet);
                        news.appendChild(newsLink);
                        newsDiv.appendChild(news);
                    }
                });
            });
        }

    };

    /**
     *
     */
    module_news.loadNews();

})(document);