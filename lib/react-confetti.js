/*! react-confetti - 1.0.2 | (c) 2015, 2016  Aaron Lampros <alampros@gmail.com> | MIT | https://github.com/alampros/react-confetti#readme */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactConfetti"] = factory(require("react"));
	else
		root["ReactConfetti"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lib";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _confetti = __webpack_require__(1);

	var _confetti2 = _interopRequireDefault(_confetti);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Confetti = function (_React$Component) {
	  _inherits(Confetti, _React$Component);

	  function Confetti() {
	    _classCallCheck(this, Confetti);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Confetti).apply(this, arguments));
	  }

	  _createClass(Confetti, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      (0, _confetti2.default)(this.refs.confetti, this.props.numberOfPieces, this.props.friction, this.props.wind, this.props.gravity);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var canvasStyles = Object.assign({}, {
	        zIndex: 2,
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        width: this.props.width,
	        height: this.props.height,
	        pointerEvents: 'none',
	        WebkitPointerEvents: 'none',
	        MozPointerEvents: 'none'
	      }, this.props.style);
	      return _react2.default.createElement('canvas', {
	        width: this.props.width,
	        height: this.props.height,
	        ref: 'confetti',
	        style: canvasStyles
	      });
	    }
	  }]);

	  return Confetti;
	}(_react2.default.Component);

	Confetti.propTypes = {
	  style: _react2.default.PropTypes.object,
	  width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
	  height: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
	  numberOfPieces: _react2.default.PropTypes.number,
	  friction: _react2.default.PropTypes.number,
	  wind: _react2.default.PropTypes.number,
	  gravity: _react2.default.PropTypes.number
	};
	Confetti.defaultProps = {
	  width: '100%',
	  height: '100%',
	  numberOfPieces: 200,
	  friction: 0.99,
	  wind: 0,
	  gravity: 0.1
	};
	exports.default = Confetti;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = confetti;

	var _utils = __webpack_require__(2);

	var utils = _interopRequireWildcard(_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * Most of this was coppied directly from the pen at http://codepen.io/Gthibaud/pen/BoaBZK
	 * and halfheartedly converted to es6.
	 */
	function confetti(canvasObj) {
	  var numberOfPieces = arguments.length <= 1 || arguments[1] === undefined ? 20 : arguments[1];
	  var friction = arguments.length <= 2 || arguments[2] === undefined ? 0.99 : arguments[2];
	  var wind = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	  var gravity = arguments.length <= 4 || arguments[4] === undefined ? 0.1 : arguments[4];

	  var canvas = canvasObj;
	  var context = canvas.getContext('2d');
	  var W = window.innerWidth;
	  var H = window.innerHeight;
	  canvas.width = W;
	  canvas.height = H;

	  var colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548'];

	  function Particle(x, y) {
	    this.radius = utils.randomRange(0.1, 1);
	    this.x = x;
	    this.y = y;
	    this.vx = utils.randomRange(-4, 4);
	    this.vy = utils.randomRange(-10, -0);
	    this.type = utils.randomInt(0, 1);

	    this.w = utils.randomRange(5, 20);
	    this.h = utils.randomRange(5, 20);

	    this.r = utils.randomRange(5, 10);

	    this.angle = utils.degreesToRads(utils.randomRange(0, 360));
	    this.anglespin = utils.randomRange(-0.2, 0.2);
	    this.color = colors[Math.floor(Math.random() * colors.length)];

	    this.rotateY = utils.randomRange(0, 1);
	  }

	  Particle.prototype.update = function updateParticle() {
	    this.x += this.vx;
	    this.y += this.vy;
	    this.vy += gravity;
	    this.vx += wind;
	    this.vx *= friction;
	    this.vy *= friction;
	    this.radius -= 0.02;
	    if (this.rotateY < 1) {
	      this.rotateY += 0.1;
	    } else {
	      this.rotateY = -1;
	    }
	    this.angle += this.anglespin;
	    context.save();
	    context.translate(this.x, this.y);
	    context.rotate(this.angle);
	    context.scale(1, this.rotateY);
	    context.rotate(this.angle);
	    context.beginPath();
	    context.fillStyle = this.color;
	    context.strokeStyle = this.color;
	    context.lineCap = 'round';
	    context.lineWidth = 2;
	    if (this.type === 0) {
	      context.beginPath();
	      context.arc(0, 0, this.r, 0, 2 * Math.PI);
	      context.fill();
	    } else if (this.type === 2) {
	      context.beginPath();
	      for (var i = 0; i < 22; i++) {
	        var angle = 0.5 * i;
	        var x = (0.2 + 1.5 * angle) * Math.cos(angle);
	        var y = (0.2 + 1.5 * angle) * Math.sin(angle);
	        context.lineTo(x, y);
	      }
	      context.stroke();
	    } else if (this.type === 1) {
	      context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
	    }
	    context.closePath();
	    context.restore();
	  };

	  function ParticleGenerator(x, y, w, h, number, text) {
	    // particle will spawn in this aera
	    this.x = x;
	    this.y = y;
	    this.w = w;
	    this.h = h;
	    this.number = number;
	    this.particles = [];
	    this.text = text;
	    this.recycle = true;
	    this.type = 1;
	  }
	  ParticleGenerator.prototype.animate = function animateParticle() {
	    context.fillStyle = 'grey';
	    context.beginPath();
	    context.strokeRect(this.x, this.y, this.w, this.h);
	    context.font = '13px arial';
	    context.textAlign = 'center';
	    context.closePath();
	    if (this.particles.length < this.number) {
	      var newParticleX = utils.clamp(utils.randomRange(this.x, this.w + this.x), this.x, this.w + this.x);
	      var newParticleY = utils.clamp(utils.randomRange(this.y, this.h + this.y), this.y, this.h + this.y);
	      this.particles.push(new Particle(newParticleX, newParticleY, this.text));
	    }

	    if (this.particles.length > this.number) {
	      this.particles.length = this.number;
	    }

	    for (var i = 0; i < this.particles.length; i++) {
	      var p = this.particles[i];
	      p.update();
	      if (p.y > H || p.y < -100 || p.x > W + 100 || p.x < -100 && this.recycle) {
	        // a brand new particle replacing the dead one
	        var _newParticleX = utils.clamp(utils.randomRange(this.x, this.w + this.x), this.x, this.w + this.x);
	        var _newParticleY = utils.clamp(utils.randomRange(this.y, this.h + this.y), this.y, this.h + this.y);
	        this.particles[i] = new Particle(_newParticleX, _newParticleY, this.text);
	      }
	    }
	  };

	  var generator1 = new ParticleGenerator(0, 0, W, 0, numberOfPieces);

	  function toggleEngine() {
	    if (generator1.type === 0) {
	      generator1.type = 1;
	      generator1.x = W / 2;
	      generator1.y = H / 2;
	      generator1.w = 0;
	    } else {
	      generator1.type = 0;
	      generator1.x = 1;
	      generator1.w = W;
	      generator1.y = 0;
	    }
	  }

	  function update() {
	    generator1.number = numberOfPieces;
	    // context.globalAlpha=.5;
	    context.fillStyle = 'white';
	    context.clearRect(0, 0, W, H);
	    generator1.animate();
	    requestAnimationFrame(update);
	  }

	  toggleEngine();
	  update();
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.norm = norm;
	exports.lerp = lerp;
	exports.map = map;
	exports.clamp = clamp;
	exports.distance = distance;
	exports.distanceXY = distanceXY;
	exports.circleCollision = circleCollision;
	exports.circlePointCollision = circlePointCollision;
	exports.inRange = inRange;
	exports.pointInRect = pointInRect;
	exports.rangeIntersect = rangeIntersect;
	exports.rectIntersect = rectIntersect;
	exports.degreesToRads = degreesToRads;
	exports.radsToDegrees = radsToDegrees;
	exports.randomRange = randomRange;
	exports.randomInt = randomInt;
	function norm(value, min, max) {
	  return (value - min) / (max - min);
	}

	function lerp(lnorm, min, max) {
	  return (max - min) * lnorm + min;
	}

	function map(value, sourceMin, sourceMax, destMin, destMax) {
	  return lerp(norm(value, sourceMin, sourceMax), destMin, destMax);
	}

	function clamp(value, min, max) {
	  return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
	}

	function distance(p0, p1) {
	  var dx = p1.x - p0.x;
	  var dy = p1.y - p0.y;
	  return Math.sqrt(dx * dx + dy * dy);
	}

	function distanceXY(x0, y0, x1, y1) {
	  var dx = x1 - x0;
	  var dy = y1 - y0;
	  return Math.sqrt(dx * dx + dy * dy);
	}

	function circleCollision(c0, c1) {
	  return distance(c0, c1) <= c0.radius + c1.radius;
	}

	function circlePointCollision(x, y, circle) {
	  return distanceXY(x, y, circle.x, circle.y) < circle.radius;
	}

	function inRange(value, min, max) {
	  return value >= Math.min(min, max) && value <= Math.max(min, max);
	}

	function pointInRect(x, y, rect) {
	  return inRange(x, rect.x, rect.x + rect.width) && inRange(y, rect.y, rect.y + rect.height);
	}

	function rangeIntersect(min0, max0, min1, max1) {
	  return Math.max(min0, max0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(min1, max1);
	}

	function rectIntersect(r0, r1) {
	  return rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) && rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
	}

	function degreesToRads(degrees) {
	  return degrees / 180 * Math.PI;
	}

	function radsToDegrees(radians) {
	  return radians * 180 / Math.PI;
	}

	function randomRange(min, max) {
	  return min + Math.random() * (max - min);
	}

	function randomInt(min, max) {
	  return Math.floor(min + Math.random() * (max - min + 1));
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;