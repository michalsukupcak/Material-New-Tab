chrome.management.getAll(function (extensions) {

    function App(name, icon, id) {
        this.name = name;
        this.icon = icon;
        this.id = id;
    }

    function compareApps(leftApp, rightApp) {
        return leftApp.name.localeCompare(rightApp.name);
    }

    var apps = [];
    for (var i = 0; i < extensions.length; i++) {
        var extension = extensions[i];
        if (extension.enabled == true && (extension.type == 'hosted_app' || extension.type == 'packaged_app' || extension.type == 'legacy_packaged_app')) {
            var name;
            if (extension.name.length > 11) {
                name = extension.name.substring(0,8) + ' ...';
            } else {
                name = extension.name;
            }
            var icon;
            if (extension.icons[1] != null) {
                icon = extension.icons[1].url;
            } else {
                icon = extension.icons[0].url;
            }
            apps.push(new App(name, icon, extension.id));
        }
    }
    apps.sort(compareApps);

    var div = document.getElementById('module_apps');
    for (var i = 0; i < apps.length; i++) {
        var app = apps[i];
        var appIcon = document.createElement('img');
        appIcon.setAttribute('src', app.icon);
        var appDescription = document.createElement('div');
        appDescription.innerHTML = app.name;
        var appContainer = document.createElement('div');
        appContainer.className = 'mdl-cell mdl-cell--4-col';
        appContainer.setAttribute('data-app-id', app.id);
        appContainer.appendChild(appIcon);
        appContainer.appendChild(appDescription);
        appContainer.addEventListener('click', function () {
            chrome.management.launchApp(this.getAttribute('data-app-id'));
        });
        div.appendChild(appContainer);
    }

});

document.getElementById('module_apps_openAll').addEventListener('click', function () {
    chrome.tabs.create({
        url: 'chrome://apps'
    });
});