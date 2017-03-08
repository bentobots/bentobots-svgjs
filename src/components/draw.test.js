import draw from './draw'

it('draws an svg', async () => {
  const expected = '<svg>'
  const COMMANDS = [['rect', 10, 10], ['fill', 'pink']]
  expect(draw.implementation({ ELEMENT_ID: 'svg', COMMANDS })).toEqual(expected)
})
