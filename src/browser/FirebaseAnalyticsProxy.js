function notSupported(win,fail) {
    //
    console.log('FirebaseAnalytics is not supported');
    setTimeout(function(){
        if (win) {
            win();
        }
        // note that while it is not explicitly supported, it does not fail
        // this is really just here to allow developers to test their code in the browser
        // and if we fail, then their app might as well. -jm
    },0);
}

module.exports = {
    logEvent:notSupported,
    setUserId:notSupported,
    setUserProperty:notSupported,
    resetAnalyticsData:notSupported,
    setEnabled:notSupported,
    setCurrentScreen: notSupported
};

require("cordova/exec/proxy").add("FirebaseAnalytics", module.exports);

