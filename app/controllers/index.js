var GA = require("analytics.google");
var tracker = GA.getTracker("UA-60304535-1");
// custom use
// var tracker = GA.getTracker("UA-60316470-1"); // isa ga
GA.trackUncaughtExceptions = true;
// ios only
GA.optOut = false;
// set dryRun to true if you are debugging and don't want to capture data (default is true)
GA.dryRun = false;
// Data collected using the Google Analytics SDK for Android is stored locally before being
// dispatched on a separate thread to Google Analytics.
// By default, data is dispatched from the Google Analytics SDK for Android every 30 minutes.
GA.dispatchInterval = 0.1;
// minutes

tracker.setUser({
	userId : "testingios001",
	category : "UX",
	action : "User Sign In"
});

function init() {
	
}

function doClickLogin(e) {
	try {
		tracker.trackEvent({
			category : "Login",
			action : "Login Successfully"
		});

		tracker.trackScreen({
			screenName : "Login Screen"
		});
	} catch (e) {
		alert(e);
	}
}

function doClickEvent(e) {
	try {
		tracker.trackEvent({
			category : "Event",
			action : "Enter Event"
		});

		tracker.trackScreen({
			screenName : "Event Screen"
		});
	} catch (e) {
		alert(e);
	}
}

function doClickCustom(e) {
	try {
		tracker.trackEvent({
			category : "Custom Event",
			action : "Enter",
			label : "hahaha",
			value : 1,
			customDimension : {
				"1" : "Toronto"
			},
			customMetric : {
				"1" : 68.3
			}
		});

		tracker.trackScreen({
			screenName : "Custom Screen"
		});
	} catch (e) {
		alert(e);
	}
}

function doClickScreen(e) {
	try {
		tracker.trackScreen({
			screenName : "Home Screen"
		});
	} catch (e) {
		alert(e);
	}
}

function doDecrypted(e) {
	var str = "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";
	var decrypted = "";
	
	if (str)
		decrypted = decryptString(str);
	
	if (decrypted) {
		alert (decrypted);
		Ti.API.info(decrypted);
		var jsonDecrypted = JSON.parse(decrypted);
		alert (jsonDecrypted);
		Ti.API.info(jsonDecrypted);
	}
}

function encryptString(str) {
	return zipper.encryptString(str, "oy7y6t5t8u8jx89ka6c7h3nc7ys7xha7", "i9j7c6j83n7c9ix7");
}

function decryptString(str) {
	return zipper.decryptString(str, "oy7y6t5t8u8jx89ka6c7h3nc7ys7xha7", "i9j7c6j83n7c9ix7");
}

$.index.open();
