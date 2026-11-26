
type Browser = 'Chrome' | 'Firefox' | 'Edge'

enum BrowserInfo {
    CHROME = 'Chromium',
    FIREFOX = 'Gecko',
    EDGE = 'Chromium'
}
function launchBrowser(browser: BrowserInfo) {
    console.log('Launching Browser', browser);
}

launchBrowser(BrowserInfo.CHROME);
launchBrowser(BrowserInfo.FIREFOX);
launchBrowser(BrowserInfo.EDGE);

