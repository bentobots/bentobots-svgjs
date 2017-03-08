var fs = require('fs')
const phantom = require('phantom')

function done (s) {
  console.log(s)
}

(async function () {
  const instance = await phantom.create()
  const page = await instance.createPage()
  await page.on('onResourceRequested', function (requestData) {
    console.info('Requesting', requestData.url)
  })

  const status = await page.open('fixtures/boilerplate.html')
  // console.log(status)

  const content = await page.property('content')
  // console.log(content)

  const ev = await page.evaluate(function () { return (SVG('svg').size(300, 300).rect(100, 100).fill('#f06').svg()) })

  const doc = await page.evaluate(function () { return document.getElementById('svg').innerHTML })

  await instance.exit()

  done(ev)
}(done))

