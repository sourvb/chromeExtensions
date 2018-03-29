var openwithjsonparseronlinefrReadyStateCheckInterval = setInterval(function() {
    if(document.getElementById("eT")){
        clearInterval(openwithjsonparseronlinefrReadyStateCheckInterval);
        var elem = document.getElementById("eT");
    	chrome.storage.local.get(['openwithjsonparseronlinefr'], function(result) {
        	elem.value = result.openwithjsonparseronlinefr;
        	elem.focus();
        	elem.click();
        	elem.blur();
            chrome.storage.local.remove(['openwithjsonparseronlinefr']);
        });
    }
}, 15);