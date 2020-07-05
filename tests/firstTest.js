module.exports = {
    // 在百度搜索“成都育碧”，然后点击百度地图，看到URL中有“map.baidu”字样。
    "Baidu Search": function (browser) {
        browser.url("https://www.baidu.com")
            .waitForElementVisible("input[id='kw']", 4000)
            .setValue("input[id='kw']", "成都育碧")
            .keys(browser.Keys.ENTER)
            .waitForElementVisible("a[class*='s-tab-map']", 4000)
            .pause(3000)
            .click("a[class*='s-tab-map']")
            .assert.urlContains("map.baidu")
            .end();
    },
    // 在百度搜索“sichuanhangkong”，结果页面URL中包含“sichuanhangkong”字样。
    "sichuanhangkong": function (browser) {
        browser
            .url("https://www.baidu.com")
            .waitForElementVisible("input[id='kw']", 5000)
            .setValue("input[id='kw']", "sichuanhangkong")
            .keys(browser.Keys.ENTER)
            .assert.urlContains("sichuanhangkong")
            .end();
    },
    // 在淘宝搜索“杯子”，因为没有登录，所以会自动跳转到登录页面。
    "taobao": function (browser) {
        browser
            .url("https://www.taobao.com/")
            .waitForElementVisible("input[id='q']",4000)
            .setValue("input[id='q']","杯子")
            .keys(browser.Keys.ENTER)
            .assert.urlContains("login")
            .end();
    }
};
