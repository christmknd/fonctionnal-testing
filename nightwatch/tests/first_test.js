//demo.js is a JS file under tests folder
module.exports = {
    'step one: go on google homepage' : function (browser) { //step one
    browser
    .url('https://www.google.com')
    .waitForElementVisible('body', 1000)
    .assert.title('Google')
    .click('#L2AGLb > div') // selector cookie de google 
    .assert.visible('input[type=text]')
    .setValue('input[type=text]', 'nightwatch')
    .click('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b') // accepter cookie 
    .assert.visible('#rso > div:nth-child(1) > div.g.Ww4FFb.vt6azd.tF2Cxc > div > div.Z26q7c.UK95Uc.jGGQ5e > div > a > h3') //premier lien 
    .click('#rso > div:nth-child(1) > div.g.Ww4FFb.vt6azd.tF2Cxc > div > div.Z26q7c.UK95Uc.jGGQ5e > div > a > h3')
    .assert.visible('body > header > div > div > a > div > span') // le titre nightwatch.js 
    .assert.urlEquals('https://nightwatchjs.org/')

    }

}