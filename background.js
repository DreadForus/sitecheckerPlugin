chrome.browserAction.onClicked.addListener(function(activeTab){

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        var url = tab.url;

        const siteCheckerUrl = "https://sitechecker.pro/seo-report/" + url;

        chrome.tabs.create({ url: siteCheckerUrl });
    });
});
