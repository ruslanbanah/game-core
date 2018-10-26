/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/layer.js":
/*!***************************!*\
  !*** ./src/core/layer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Layer = function () {\n  function Layer(name, width, height) {\n    _classCallCheck(this, Layer);\n\n    var canvas = document.createElement('canvas');\n    canvas.width = width;\n    canvas.height = height;\n    canvas.classList.add('layer');\n    this.name = name;\n    this.canvas = canvas;\n    this.ctx = canvas.getContext('2d'), this.sprites = [], this.width = width;\n    this.height = height;\n    console.log(this);\n  }\n\n  _createClass(Layer, [{\n    key: 'addSprite',\n    value: function addSprite(sprite) {\n      this.sprites.push(sprite);\n    }\n  }, {\n    key: 'addSprites',\n    value: function addSprites(array) {\n      var _this = this;\n\n      array.map(function (sprite) {\n        return _this.addSprite(sprite);\n      });\n    }\n  }, {\n    key: 'clear',\n    value: function clear() {\n      this.ctx.clearRect(0, 0, this.width, this.height);\n    }\n  }, {\n    key: 'renderResource',\n    value: function renderResource(res, x, y) {\n      this.ctx.translate(x, y);\n      this.ctx.drawImage(res, x, y);\n      this.ctx.translate(-x, -y);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      //render all sprites\n      if (this.sprites && this.sprites.length) {\n        this.clear();\n        this.sprites.map(function (sprite) {\n          sprite.render(_this2.ctx);\n        });\n      }\n    }\n  }, {\n    key: 'update',\n    value: function update(_ref) {\n      var scene = _ref.scene;\n\n      //update all sprites and other things\n      this.sprites.map(function (sprite) {\n        sprite.update({ scene: scene });\n      });\n    }\n  }]);\n\n  return Layer;\n}();\n\nmodule.exports = Layer;\n\n//# sourceURL=webpack:///./src/core/layer.js?");

/***/ }),

/***/ "./src/core/resources.js":
/*!*******************************!*\
  !*** ./src/core/resources.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Resources = function () {\n  function Resources() {\n    _classCallCheck(this, Resources);\n\n    this.resourceCache = {};\n    this.loading = [];\n    this.readyCallbacks = [];\n  }\n\n  _createClass(Resources, [{\n    key: \"load\",\n    value: function load(urlOrArr) {\n      var _this = this;\n\n      if (urlOrArr instanceof Array) {\n        return Promise.all(urlOrArr.map(function (url) {\n          return _this._load(url);\n        }));\n      }\n      return this._load(urlOrArr);\n    }\n  }, {\n    key: \"_load\",\n    value: function _load(url) {\n      var _this2 = this;\n\n      return new Promise(function (resolve, reject) {\n        if (_this2.geting(url)) resolve(_this2.geting(url));\n        var img = new Image();\n        img.onload = function () {\n          _this2.resourceCache[url] = img;\n          resolve(img);\n        };\n        img.src = url;\n      });\n    }\n  }, {\n    key: \"geting\",\n    value: function geting(url) {\n      return this.resourceCache[url];\n    }\n  }]);\n\n  return Resources;\n}();\n\nmodule.exports = Resources;\n\n//# sourceURL=webpack:///./src/core/resources.js?");

/***/ }),

/***/ "./src/core/scene.js":
/*!***************************!*\
  !*** ./src/core/scene.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _layer = __webpack_require__(/*! ./layer */ \"./src/core/layer.js\");\n\nvar _layer2 = _interopRequireDefault(_layer);\n\nvar _sprite = __webpack_require__(/*! ./sprite */ \"./src/core/sprite.js\");\n\nvar _sprite2 = _interopRequireDefault(_sprite);\n\nvar _resources = __webpack_require__(/*! ./resources */ \"./src/core/resources.js\");\n\nvar _resources2 = _interopRequireDefault(_resources);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Scene = function () {\n  function Scene(width, height, layers) {\n    _classCallCheck(this, Scene);\n\n    this.requestAnimFrame = function (window) {\n      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {\n        window.setTimeout(callback, 1000 / 60);\n      };\n    }(window);\n    this.width = width;\n    this.height = height;\n\n    this.layers = [];\n    for (var i = 1; i <= layers; i++) {\n      var layer = new _layer2.default('Layer-' + i, width, height);\n      this.layers.push(layer);\n    }\n    this.now = Date.now();\n    this.startGame = Date.now();\n    this.lastTime = Date.now();\n    this.gameTime = 0;\n    this.fps = 0;\n    this.info = document.getElementById('info');\n    this._resourcesPatch = new Set();\n    this.resources = new _resources2.default();\n  }\n\n  _createClass(Scene, [{\n    key: '_created',\n    value: function _created() {\n      this.created();\n      this.layers.map(function (layer) {\n        return document.body.appendChild(layer.canvas);\n      });\n    }\n  }, {\n    key: 'created',\n    value: function created() {}\n  }, {\n    key: 'attached',\n    value: function attached() {}\n  }, {\n    key: 'addSpriteToLayer',\n    value: function addSpriteToLayer(layerNumber, options) {\n      var _this = this;\n\n      if (!Array.isArray(options)) options = [options];\n      console.log('!!!!', options);\n      var sprites = (options || []).map(function (opt) {\n        if (opt && !opt.resource && opt.url) opt.resource = _this.resources.geting(opt.url);\n        console.log(opt);\n        return new _sprite2.default(opt);\n      });\n      this.layers[layerNumber].addSprites(sprites);\n      return sprites;\n    }\n  }, {\n    key: 'addResource',\n    value: function addResource(res) {\n      var _this2 = this;\n\n      if (Array.isArray(res)) {\n        res.map(function (r) {\n          return _this2._resourcesPatch.add(r);\n        });\n      } else {\n        this._resourcesPatch.add(res);\n      }\n    }\n  }, {\n    key: 'beforeLoadResource',\n    value: function beforeLoadResource() {}\n  }, {\n    key: 'loadResources',\n    value: function loadResources() {\n      this.beforeLoadResource();\n      return this.resources.load(this.resourcesPatch);\n    }\n  }, {\n    key: 'init',\n    value: function init() {}\n  }, {\n    key: 'start',\n    value: function start() {\n      this._created();\n      this.loadResources().then(this.init.bind(this)).then(this.attached.bind(this)).then(this.run.bind(this));\n    }\n  }, {\n    key: 'run',\n    value: function run() {\n      this.now = Date.now();\n      this.dt = (this.now - this.lastTime) / 1000.0;\n      this.gameTime += this.dt;\n      this.fps = Math.round(1 / this.dt);\n\n      this.update();\n      this.render();\n\n      this.lastTime = this.now;\n\n      window.requestAnimationFrame(this.run.bind(this));\n    }\n  }, {\n    key: 'onLayerUpdate',\n    value: function onLayerUpdate(layer) {}\n  }, {\n    key: 'onLayerRender',\n    value: function onLayerRender(layer) {}\n  }, {\n    key: 'update',\n    value: function update() {\n      var _this3 = this;\n\n      this.layers.map(function (l) {\n        l.update({ scene: _this3 });\n        _this3.onLayerUpdate(l);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this4 = this;\n\n      this.layers.map(function (l) {\n        l.render();\n        _this4.onLayerRender(l);\n      });\n      this.info.innerHTML = 'Game Time: ' + Math.round(this.gameTime, 2) + '</br> fps: ' + this.fps;\n    }\n  }, {\n    key: 'resourcesPatch',\n    get: function get() {\n      var resources = [];\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this._resourcesPatch[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var path = _step.value;\n\n          resources.push(path);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      return resources;\n    }\n  }]);\n\n  return Scene;\n}();\n\nmodule.exports = Scene;\n\n//# sourceURL=webpack:///./src/core/scene.js?");

/***/ }),

/***/ "./src/core/sprite.js":
/*!****************************!*\
  !*** ./src/core/sprite.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Sprite = function () {\n    function Sprite(_ref) {\n        var resource = _ref.resource,\n            position = _ref.position,\n            pos = _ref.pos,\n            size = _ref.size,\n            speed = _ref.speed,\n            frames = _ref.frames,\n            dir = _ref.dir,\n            once = _ref.once;\n\n        _classCallCheck(this, Sprite);\n\n        this.position = position;\n        this.pos = pos;\n        this.size = size;\n        this.resource = resource || null;\n        this.speed = typeof speed === 'number' ? speed : 0;\n        this.frames = frames;\n        this._index = 0;\n        this.url = resource && resource.src || null;\n        this.dir = dir || 'horizontal';\n        this.once = once;\n    }\n\n    _createClass(Sprite, [{\n        key: 'update',\n        value: function update(_ref2) {\n            var scene = _ref2.scene;\n\n            this._index += this.speed * scene.dt;\n            this._move();\n        }\n    }, {\n        key: '_move',\n        value: function _move() {\n            if (this.move && typeof this.move === 'function') {\n                this.move(this);\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render(ctx) {\n            var frame;\n\n            if (this.speed > 0) {\n                var max = this.frames.length;\n                var idx = Math.floor(this._index);\n                frame = this.frames[idx % max];\n\n                if (this.once && idx >= max) {\n                    this.done = true;\n                    return;\n                }\n            } else {\n                frame = 0;\n            }\n\n            var x = this.pos[0];\n            var y = this.pos[1];\n\n            if (this.dir == 'vertical') {\n                y += frame * this.size[1];\n            } else {\n                x += frame * this.size[0];\n            }\n            ctx.save();\n            ctx.translate(this.position[0], this.position[1]);\n            ctx.drawImage(this.resource, x, y, this.size[0], this.size[1], 0, 0, this.size[0], this.size[1]);\n            ctx.translate(-this.position[0], -this.position[1]);\n            ctx.restore();\n        }\n    }]);\n\n    return Sprite;\n}();\n\nmodule.exports = Sprite;\n\n//# sourceURL=webpack:///./src/core/sprite.js?");

/***/ }),

/***/ "./src/game/ralli.js":
/*!***************************!*\
  !*** ./src/game/ralli.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _scene = __webpack_require__(/*! ../core/scene */ \"./src/core/scene.js\");\n\nvar _scene2 = _interopRequireDefault(_scene);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar RalliScene = function (_Scene) {\n  _inherits(RalliScene, _Scene);\n\n  function RalliScene() {\n    _classCallCheck(this, RalliScene);\n\n    return _possibleConstructorReturn(this, (RalliScene.__proto__ || Object.getPrototypeOf(RalliScene)).apply(this, arguments));\n  }\n\n  _createClass(RalliScene, [{\n    key: 'created',\n    value: function created() {\n      //Add resources\n      this.addResource(['assets/terrain.png', 'assets/spritestrip.png', 'assets/sprites.png']);\n    }\n  }, {\n    key: 'attached',\n    value: function attached() {\n      var _this2 = this;\n\n      //{resource, position, pos, size, speed, frames, dir, once}\n      var sprites = [{\n        url: 'assets/sprites.png',\n        resource: null,\n        position: [10, 10],\n        pos: [0, 0],\n        size: [39, 39],\n        speed: 16,\n        frames: [0, 1],\n        dir: null,\n        once: null\n      }, {\n        url: 'assets/sprites.png',\n        resource: null,\n        position: [30, 30],\n        pos: [0, 78],\n        size: [80, 39],\n        speed: 16,\n        frames: [0, 1, 2, 3, 2, 1],\n        dir: null,\n        once: null\n      }];\n\n      var _addSpriteToLayer = this.addSpriteToLayer(1, sprites);\n\n      var _addSpriteToLayer2 = _slicedToArray(_addSpriteToLayer, 2);\n\n      this.helicopter = _addSpriteToLayer2[0];\n      this.alian = _addSpriteToLayer2[1];\n\n\n      this.helicopter.dx = 50;\n      this.helicopter.dy = 100;\n      this.helicopter.move = function (sp) {\n        if (sp.position[0] > _this2.layers[0].width - sp.size[0]) sp.dx = -sp.dx;\n        if (sp.position[0] < 1) sp.dx = -sp.dx;\n        if (sp.position[1] > _this2.layers[0].height - sp.size[1]) sp.dy = -sp.dy;\n        if (sp.position[1] < 1) sp.dy = -sp.dy;\n        sp.position[0] += _this2.dt * sp.dx;\n        sp.position[1] += _this2.dt * sp.dy;\n      };\n      this.alian.dx = 100;\n      this.alian.dy = -100;\n      this.alian.move = function (sp) {\n        if (sp.position[0] > _this2.layers[0].width - sp.size[0]) sp.dx = -sp.dx;\n        if (sp.position[0] < 1) sp.dx = -sp.dx;\n        if (sp.position[1] > _this2.layers[0].height - sp.size[1]) sp.dy = -sp.dy;\n        if (sp.position[1] < 1) sp.dy = -sp.dy;\n        sp.position[0] += _this2.dt * sp.dx;\n        sp.position[1] += _this2.dt * sp.dy;\n      };\n    }\n  }, {\n    key: 'init',\n    value: function init() {\n      var wall = this.resources.geting('assets/terrain.png');\n      for (var i = 0; i <= 20; i++) {\n        for (var j = 0; j <= 20; j++) {\n          if (Math.random() * 10 > 5) {\n            this.layers[0].renderResource(wall, i * 20, j * 20);\n          }\n        }\n      }\n    }\n  }]);\n\n  return RalliScene;\n}(_scene2.default);\n\nexports.default = RalliScene;\n\n//# sourceURL=webpack:///./src/game/ralli.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ralli = __webpack_require__(/*! ./game/ralli */ \"./src/game/ralli.js\");\n\nvar _ralli2 = _interopRequireDefault(_ralli);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar scene = new _ralli2.default(512, 480, 2);\nscene.start();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });