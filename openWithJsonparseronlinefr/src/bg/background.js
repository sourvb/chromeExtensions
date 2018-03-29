function openwithjsonparseronlinefrClickHandler(info, tab) {
	if(info.menuItemId == "openwithjsonparseronlinefr" && info.selectionText) {
		chrome.storage.local.set({
        	'openwithjsonparseronlinefr': info.selectionText
        }, function() {
          	chrome.tabs.create({ url: "http://json.parser.online.fr/" }, function(tab){ 
          		chrome.tabs.executeScript(tab.id, {file: "src/bg/content.js"});
			});
        });
	}
}

chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		"id": "openwithjsonparseronlinefr",
		"title": "Open with http://json.parser.online.fr/",
		"contexts": ["selection"]
	});
});

chrome.contextMenus.onClicked.addListener(openwithjsonparseronlinefrClickHandler);

