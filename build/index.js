/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/accordion-block/accordion-block.js":
/*!************************************************!*\
  !*** ./src/accordion-block/accordion-block.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }


if (!wp.blocks.getBlockType("wkode/accordion-block")) {
  wp.blocks.registerBlockType("wkode/accordion-block", {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Accordion", "wkode"),
    icon: "images-alt",
    category: "wkode",
    attributes: {
      title: {
        type: "string",
        "default": ""
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes,
        setAttributes = props.setAttributes;
      var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
      var innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)({});
      var updateTitle = function updateTitle(e) {
        setAttributes({
          title: e.target.value
        });
      };
      return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("input", {
        type: "text",
        placeholder: "Title",
        value: attributes.title,
        onChange: updateTitle
      }), /*#__PURE__*/React.createElement("div", _extends({
        className: "accordion-content"
      }, innerBlocksProps)));
    },
    save: function save(props) {
      var attributes = props.attributes;
      var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
      var innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save();
      return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", _extends({
        className: "accordion-content"
      }, innerBlocksProps)));
    }
  });
}

/***/ }),

/***/ "./src/slider-block/slider-block.js":
/*!******************************************!*\
  !*** ./src/slider-block/slider-block.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




if (!wp.blocks.getBlockType("wkode/custom-slider-block")) {
  wp.blocks.registerBlockType("wkode/custom-slider-block", {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom Slider", "wkode"),
    icon: "images-alt",
    category: "media",
    attributes: {
      images: {
        type: "array",
        "default": []
      }
    },
    edit: function edit(props) {
      var attributes = props.attributes,
        setAttributes = props.setAttributes;
      var updateImage = function updateImage(index, media) {
        var updatedImages = _toConsumableArray(attributes.images);
        updatedImages[index] = media;
        setAttributes({
          images: updatedImages
        });
      };
      var addImage = function addImage() {
        setAttributes({
          images: [].concat(_toConsumableArray(attributes.images), [null])
        });
      };
      var removeImage = function removeImage(index) {
        var updatedImages = attributes.images.filter(function (_, i) {
          return i !== index;
        });
        setAttributes({
          images: updatedImages
        });
      };
      return /*#__PURE__*/React.createElement("div", null, attributes.images.map(function (image, index) {
        return /*#__PURE__*/React.createElement("div", {
          key: index,
          style: {
            display: "flex",
            alignItems: "center"
          }
        }, image && image.url ? /*#__PURE__*/React.createElement("img", {
          src: image.url,
          alt: "Selected Image",
          style: {
            width: "50px",
            height: "50px",
            marginRight: "10px"
          }
        }) : null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
          onSelect: function onSelect(media) {
            return updateImage(index, media);
          },
          allowedTypes: ["image"],
          render: function render(_ref) {
            var open = _ref.open;
            return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: open,
              isSecondary: true
            }, image && image.url ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Change Image", "wkode") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select Image", "wkode"));
          }
        })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
          icon: "trash",
          label: "Remove",
          onClick: function onClick() {
            return removeImage(index);
          },
          isDestructive: true
        }));
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: addImage,
        isPrimary: true
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add Image", "wkode")));
    },
    save: function save() {
      return null;
    }
  });
}

/***/ }),

/***/ "./src/wiki-stats/wiki-stats.js":
/*!**************************************!*\
  !*** ./src/wiki-stats/wiki-stats.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("wkode/wiki-stats", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wiki Stats", "wkode"),
  icon: "analytics",
  category: "wkode",
  attributes: {
    year: {
      type: "string",
      "default": new Date().getFullYear().toString()
    },
    month: {
      type: "string",
      "default": (new Date().getMonth() + 1).toString().padStart(2, "0")
    },
    day: {
      type: "string",
      "default": new Date().getDate().toString().padStart(2, "0")
    }
  },
  edit: function edit(props) {
    var attributes = props.attributes,
      setAttributes = props.setAttributes;
    var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
    var updateDate = function updateDate(datePart, value) {
      setAttributes(_defineProperty({}, datePart, value));
    };
    return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("label", null, "Year:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: attributes.year,
      onChange: function onChange(e) {
        return updateDate("year", e.target.value);
      }
    }), /*#__PURE__*/React.createElement("label", null, "Month:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: attributes.month,
      onChange: function onChange(e) {
        return updateDate("month", e.target.value);
      }
    }), /*#__PURE__*/React.createElement("label", null, "Day:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: attributes.day,
      onChange: function onChange(e) {
        return updateDate("day", e.target.value);
      }
    }));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider_block_slider_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider-block/slider-block.js */ "./src/slider-block/slider-block.js");
/* harmony import */ var _accordion_block_accordion_block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion-block/accordion-block.js */ "./src/accordion-block/accordion-block.js");
/* harmony import */ var _wiki_stats_wiki_stats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wiki-stats/wiki-stats.js */ "./src/wiki-stats/wiki-stats.js");



/******/ })()
;
//# sourceMappingURL=index.js.map