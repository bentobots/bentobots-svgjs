'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _svgjs = require('svgjs');

var _svgjs2 = _interopRequireDefault(_svgjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var draw = function draw() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      ELEMENT_ID = _ref.ELEMENT_ID,
      WIDTH = _ref.WIDTH,
      HEIGHT = _ref.HEIGHT;

  var svg = (0, _svgjs2.default)(ELEMENT_ID).size(WIDTH, HEIGHT);
  return { SVG: svg };
};

exports.default = draw;