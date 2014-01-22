function util_sendMessageToBackground(_message, _callback) {
	chrome.runtime.sendMessage(_message, _callback);
}

function util_sendMessageToContentScript(_message, _callback, _tabId) {

	if (_tabId != null) {
		chrome.tabs.sendMessage(_tabId, _message, _callback);
	}
	else{
		chrome.tabs.query(
			{
				active: true,
				currentWindow: true
			},
			function(tabs) {
				var tabID = tabs[0].id;
				chrome.tabs.sendMessage(tabID, _message, _callback);
			}
		);	
	}
}

function util_requestToServer(_method, _url, _param, _callback) {
	$.ajax(
		{
			type: _method.toUpperCase(),
			url: "http://www.pararaton.com/rest/" + _url,
			data: _param
		}
	)
	.always(function(response){
		_callback(response);
	});
}

function util_changeIcon(_iconRef, _tabId) {

	if ( _tabId == null ) {
		chrome.tabs.query(
			{
				active: true,
				currentWindow: true
			},
			function(tabs) {
				var tabID = tabs[0].id;

				chrome.pageAction.setIcon({
					tabId: tabID,
					path: _iconRef
				});
			}
		);	
	}
	else{
		chrome.pageAction.setIcon({
			tabId: _tabId,
			path: _iconRef
		});
	}
	
}