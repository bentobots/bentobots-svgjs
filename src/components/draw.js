import SVG from 'svgjs'

const draw = ({ ELEMENT_ID, WIDTH, HEIGHT } = {}) => {
  const svg = SVG(ELEMENT_ID).size(WIDTH, HEIGHT)
  return { SVG: svg }
}

export default draw
