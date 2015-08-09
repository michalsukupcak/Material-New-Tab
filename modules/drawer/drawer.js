var module_drawer_links = document.getElementsByClassName('module_drawer_link');
for (var i = 0; i < module_drawer_links.length; i++) {
    module_drawer_links[i].onclick = function () {
        chrome.tabs.create({
            url: this.getAttribute('data-href')
        });
    }
}