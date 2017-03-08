import svgjs from 'svg.js'
import fs from 'fs'
import phantom from 'phantom'

const implementation = async function ({ ELEMENT_ID = 'canvas', WIDTH = 300, HEIGHT = 300, COMMANDS } = {}) {
  const apply = ([command, ...args]) => (drawing[command](...args))
  const doReturn = (svg) => {
    console.log('RETURNING')
    return { SVG: svg }
  }

  if (SVG.supported) {
    let drawing = SVG(ELEMENT_ID).size(WIDTH, HEIGHT)
    COMMANDS.map(apply)
    return doReturn(drawing.svg())
  } else {
    const instance = await phantom.create()
    const page = await instance.createPage()
    await page.on('onResourceRequested', function (requestData) {
      console.info('Requesting', requestData.url)
    })

    const status = await page.open('fixtures/boilerplate.html')
    console.log(status)

    const content = await page.property('content')
    console.log(content)

    const val = await page.evaluate(function () { return drawing = SVG(ELEMENT_ID).size(WIDTH, HEIGHT).svg() })
    console.log(val)

    await instance.exit()

    return doReturn(val)
  }
}

const spec = {
  name: 'Draw',
  description: 'draws out commands sent to it',
  implementation,
  inputs: {
    ELEMENT_ID: {},
    WIDTH: {},
    HEIGHT: {},
    COMMANDS: {}
  },
  outputs: {
    SVG: {}
  }
}

export default spec
