var clickedEl = null;
var bi = null;
document.addEventListener("mousedown", function(event){
    //right click
    if(event.button == 2) { 
        clickedEl = event.target;
		var img = clickedEl;
		style = img.currentStyle || window.getComputedStyle(img, false);
		style = style.cssText;
		bi = style.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');
		console.log(bi);
		chrome.runtime.sendMessage({greeting:"getClickedBi", value: bi}, function(response) {
			elty = response;
			console.log("sent message");
			console.log(elty);
		});
    }
}, true);

/*chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	console.log("gotmessage");
    if(request == "getClickedBi") {
        sendResponse({value: bi});
    }
});
*/