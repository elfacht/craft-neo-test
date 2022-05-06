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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../cms/templates/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../cms/templates/assets/js/app.js":
/*!*****************************************!*\
  !*** ../cms/templates/assets/js/app.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mjs_Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mjs/Constants.js */ "../cms/templates/assets/js/mjs/Constants.js");
/* harmony import */ var _mjs_Video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mjs/Video.js */ "../cms/templates/assets/js/mjs/Video.js");
/* harmony import */ var _mjs_Scroller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mjs/Scroller.js */ "../cms/templates/assets/js/mjs/Scroller.js");
/* harmony import */ var _mjs_BackToTop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mjs/BackToTop.js */ "../cms/templates/assets/js/mjs/BackToTop.js");
/* harmony import */ var _mjs_utils_IsChecked_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mjs/utils/IsChecked.js */ "../cms/templates/assets/js/mjs/utils/IsChecked.js");
/* harmony import */ var _mjs_utils_ClassRemove_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mjs/utils/ClassRemove.js */ "../cms/templates/assets/js/mjs/utils/ClassRemove.js");
/* harmony import */ var _mjs_utils_ClassAdd_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mjs/utils/ClassAdd.js */ "../cms/templates/assets/js/mjs/utils/ClassAdd.js");
/* harmony import */ var _mjs_Consent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mjs/Consent.js */ "../cms/templates/assets/js/mjs/Consent.js");
// Plugins
__webpack_require__(/*! ./vendor/intersection-observer */ "../cms/templates/assets/js/vendor/intersection-observer.js");
const lozad = __webpack_require__(/*! ./vendor/lozad.js */ "../cms/templates/assets/js/vendor/lozad.js");

// Modules










// DOM ready
(function() {

  /**
   * Cookie consent
   */
  const $consent = document.querySelector(_mjs_Constants_js__WEBPACK_IMPORTED_MODULE_0__["constConsent"].wrapper);
  if ($consent) {
    Object(_mjs_Consent_js__WEBPACK_IMPORTED_MODULE_7__["consent"])($consent);
  }


  /**
   * Init back to top link
   */
  const $backtotop = document.querySelector('[data-backtotop]');
  if ($backtotop) {
    Object(_mjs_BackToTop_js__WEBPACK_IMPORTED_MODULE_3__["default"])($backtotop);
  }




  /**
   * Init animated scrolling
   */
  const $scroller = document.querySelectorAll('[data-scroller]');
  if ($scroller) {
    Object(_mjs_Scroller_js__WEBPACK_IMPORTED_MODULE_2__["default"])($scroller);
  }



   /**
    * Disable scrolling while mobile
    * menu is open
    */
   // const $menu = document.querySelector('.js-menu-checkbox');
   // if ($menu) {
   //   $menu.addEventListener('change', function(e) {
   //     if (isChecked(this)) {
   //       addClasses(document.body, 'overflow-hidden');
   //     } else {
   //       removeClasses(document.body, 'overflow-hidden');
   //     }
   //   });
   // }

})();


/***/ }),

/***/ "../cms/templates/assets/js/mjs/BackToTop.js":
/*!***************************************************!*\
  !*** ../cms/templates/assets/js/mjs/BackToTop.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ClassRemove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ClassRemove.js */ "../cms/templates/assets/js/mjs/utils/ClassRemove.js");
/* harmony import */ var _utils_ClassAdd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ClassAdd.js */ "../cms/templates/assets/js/mjs/utils/ClassAdd.js");
/**
 * Back to top link
 *
 * -  triggers DOM element by scrolling up
 *    after X of pixels
 *
 * @type function
 */



/* harmony default export */ __webpack_exports__["default"] = (function($el) {
  const $element = document.querySelector('[data-backtotop]');
  const activeClass = 'm-backtotop--active';
  const offset = 900;
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    // if scroll direction is DOWN
    if (st > lastScrollTop) {

      // hide
      Object(_utils_ClassRemove_js__WEBPACK_IMPORTED_MODULE_0__["default"])($el, activeClass);

    // if scroll direction is UP
    } else {
      if (st > offset) {
        Object(_utils_ClassAdd_js__WEBPACK_IMPORTED_MODULE_1__["default"])($el, activeClass);
      } else {
        Object(_utils_ClassRemove_js__WEBPACK_IMPORTED_MODULE_0__["default"])($el, activeClass);
      }
    }

    lastScrollTop = st;

  }, false);
});


/***/ }),

/***/ "../cms/templates/assets/js/mjs/Consent.js":
/*!*************************************************!*\
  !*** ../cms/templates/assets/js/mjs/Consent.js ***!
  \*************************************************/
/*! exports provided: consent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consent", function() { return consent; });
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants.js */ "../cms/templates/assets/js/mjs/Constants.js");
/* harmony import */ var _utils_ClassRemove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ClassRemove.js */ "../cms/templates/assets/js/mjs/utils/ClassRemove.js");
/* harmony import */ var _utils_ClassAdd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/ClassAdd.js */ "../cms/templates/assets/js/mjs/utils/ClassAdd.js");
/* harmony import */ var _ConsentLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConsentLink.js */ "../cms/templates/assets/js/mjs/ConsentLink.js");
/**
 * Cookie consent layer
 *
 * -  checks for cookie and triggers DOM element
 *
 * @param object  $el  – DOM element | required
 */





/**
 * Show layer when cookie is not set
 * @return {Function}
 */
function consent($el) {
  const _this = this;
  const cookie = document.cookie;

  if (document.cookie.indexOf('cookieConsent=1') != -1) {
    Object(_utils_ClassRemove_js__WEBPACK_IMPORTED_MODULE_1__["default"])($el, _Constants_js__WEBPACK_IMPORTED_MODULE_0__["constConsent"].activeClass);
  } else {
    Object(_utils_ClassAdd_js__WEBPACK_IMPORTED_MODULE_2__["default"])($el, _Constants_js__WEBPACK_IMPORTED_MODULE_0__["constConsent"].activeClass);
    Object(_ConsentLink_js__WEBPACK_IMPORTED_MODULE_3__["default"])($el);
  }
}


/***/ }),

/***/ "../cms/templates/assets/js/mjs/ConsentLink.js":
/*!*****************************************************!*\
  !*** ../cms/templates/assets/js/mjs/ConsentLink.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constants.js */ "../cms/templates/assets/js/mjs/Constants.js");
/**
 * Bind link to set cookie and hide that element
 *
 * @param  object   $wrapper  – DOM element | required
 * @return function
 */


/* harmony default export */ __webpack_exports__["default"] = (function($wrapper) {
  const $link = document.querySelector(_Constants_js__WEBPACK_IMPORTED_MODULE_0__["constConsent"].link);

  if ($link && $wrapper) {

    $link.addEventListener('click', function(e) {
      e.preventDefault();

      // Set cookie
      var expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      document.cookie = 'cookieConsent=1;path=/;' + 'expires=' + expiryDate.toGMTString();

      // Hide layer
      $wrapper.parentNode.removeChild($wrapper);
    });
  }
});


/***/ }),

/***/ "../cms/templates/assets/js/mjs/Constants.js":
/*!***************************************************!*\
  !*** ../cms/templates/assets/js/mjs/Constants.js ***!
  \***************************************************/
/*! exports provided: constConsent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constConsent", function() { return constConsent; });
/**
 * Constants for Consent.js
 *
 * @type var
 */
const constConsent = {
  cookieName: 'cookieConsent',
  wrapper: '[data-consent]',
  link: '[data-consent-link]',
  activeClass: 'is-active'
};


/***/ }),

/***/ "../cms/templates/assets/js/mjs/Scroller.js":
/*!**************************************************!*\
  !*** ../cms/templates/assets/js/mjs/Scroller.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ScrollToElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ScrollToElement.js */ "../cms/templates/assets/js/mjs/utils/ScrollToElement.js");
/**
 * Bind animated scrolling
 *
 * @param  object   $el       – element with data-scrolling attribute | required
 * @return function
 */


/* harmony default export */ __webpack_exports__["default"] = (function($el) {
  for (let i = 0; i < $el.length; i++) {
    $el[i].addEventListener('click', function(e) {
      e.preventDefault();
      Object(_utils_ScrollToElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
    }, false);
  }
});


/***/ }),

/***/ "../cms/templates/assets/js/mjs/Video.js":
/*!***********************************************!*\
  !*** ../cms/templates/assets/js/mjs/Video.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Video player
 *
 * – using videojs for custom style
 * - appends responsive video elements to DOM element
 *
 * @param object $el    – DOM video object | required
 */

/* harmony default export */ __webpack_exports__["default"] = (function($el) {
  for (let i = 0; i < $el.length; i++) {
    const $video = $el[i];
    const videoId = $video.dataset.video;
    const viewport = window.innerWidth;

    // Get video URLs
    const mp4 = $video.dataset.videoMp4;
    const mp4Mobile = $video.dataset.videoMp4mobile;
    const webm = $video.dataset.videoWebm;
    const webmMobile = $video.dataset.videoWebmMobile;

    // Define mobile URLs with fallback
    const mp4MobileVideo = mp4Mobile ? mp4Mobile : mp4;
    const webmMobileVideo = webmMobile ? webmMobile : mp4;

    // Hide context menu
    if ($video.addEventListener) {
      $video.addEventListener('contextmenu', function(e) {
        e.preventDefault();
      }, false);
    } else {
      $video.attachEvent('oncontextmenu', function() {
        window.event.returnValue = false;
      });
    }

    // Append videos
    if (viewport < 769) {
      if (mp4MobileVideo) {
        $video.insertAdjacentHTML('beforeend', '<source src="' + mp4MobileVideo + '" type="video/mp4">');
      }

      if (webmMobileVideo) {
        $video.insertAdjacentHTML('beforeend', '<source src="' + webmMobileVideo + '" type="video/webm">');
      }
    } else {
      if (mp4) {
        $video.insertAdjacentHTML('beforeend', '<source src="' + mp4 + '" type="video/mp4">');
      }

      if (webm) {
        $video.insertAdjacentHTML('beforeend', '<source src="' + webm + '" type="video/webm">');
      }
    }
  }
});


/***/ }),

/***/ "../cms/templates/assets/js/mjs/utils/ClassAdd.js":
/*!********************************************************!*\
  !*** ../cms/templates/assets/js/mjs/utils/ClassAdd.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Add classes to an element
 *
 * @param object  $element      – DOM element | required
 * @param string  className     – CSS class to be added | required
 * @return function
 */
/* harmony default export */ __webpack_exports__["default"] = (function($element, className) {
  if ($element.classList) {
    $element.classList.add(className);
  } else {
    $element.className += ' ' + className;
  }
});


/***/ }),

/***/ "../cms/templates/assets/js/mjs/utils/ClassRemove.js":
/*!***********************************************************!*\
  !*** ../cms/templates/assets/js/mjs/utils/ClassRemove.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Remove classes from an element
 *
 * @param object  $element        – DOM element | required
 * @param string  className       – CSS class to be removed | required
 * @return {Function}
 */
/* harmony default export */ __webpack_exports__["default"] = (function($element, className) {
  if ($element.classList) {
    $element.classList.remove(className);
  } else {
    $element.className = $element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
});


/***/ }),

/***/ "../cms/templates/assets/js/mjs/utils/IsChecked.js":
/*!*********************************************************!*\
  !*** ../cms/templates/assets/js/mjs/utils/IsChecked.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Check if checkbox is checked
 *
 * @param object   $checkbox      – checkbox DOM element | required
 * @return boolean
 */
/* harmony default export */ __webpack_exports__["default"] = (function($checkbox) {
  return $checkbox.checked ? true : false;
});


/***/ }),

/***/ "../cms/templates/assets/js/mjs/utils/ScrollToElement.js":
/*!***************************************************************!*\
  !*** ../cms/templates/assets/js/mjs/utils/ScrollToElement.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getelementYPos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getelementYPos.js */ "../cms/templates/assets/js/mjs/utils/getelementYPos.js");
/**
 * Scroll to element with transition
 *
 * @param  object  $el            – clicked element | required
 * @param  integer duration       – scrolling duration | optional
 * @param  boolean isOption       – checks if element is <option> | optional
 * @return function
 */


/* harmony default export */ __webpack_exports__["default"] = (function($el, duration, isOption) {
  const dur = duration ? duration : 300;

  // check if <option> or <a>
  const target = isOption ? $el.value : $el.getAttribute('href');

  const startingY = window.pageYOffset;

  const dataOffset = $el.dataset.scrollOffset;
  const offset = dataOffset ? dataOffset : 0;
  const elementY = Object(_getelementYPos_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target) - offset;

  // If element is close to page's bottom then window will scroll only to some position above the element.
  var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
  var diff = targetY - startingY;

  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  const easing = function (t) { return t<0.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1; };
  let start;

  if (!diff) { return; }

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) { start = timestamp; }
    // Elapsed miliseconds since start of scrolling.
    const time = timestamp - start;
    // Get percent of completion in range [0, 1].
    let percent = Math.min(time / dur, 1);

    // Apply the easing.
    // It can cause bad-looking slow frames in browser performance tool, so be careful.
    percent = easing(percent);

    window.scrollTo(0, startingY + diff * percent);

    // Proceed with animation as long as we wanted it to.
    if (time < dur) {
      window.requestAnimationFrame(step);
    }
  });
});


/***/ }),

/***/ "../cms/templates/assets/js/mjs/utils/getelementYPos.js":
/*!**************************************************************!*\
  !*** ../cms/templates/assets/js/mjs/utils/getelementYPos.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Get Y position of element
 *
 * @param  string   query       – query selector | required
 * @return integer       
 */
/* harmony default export */ __webpack_exports__["default"] = (function(query) {
  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top;
});


/***/ }),

/***/ "../cms/templates/assets/js/vendor/intersection-observer.js":
/*!******************************************************************!*\
  !*** ../cms/templates/assets/js/vendor/intersection-observer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */

(function(window, document) {
'use strict';


// Exits early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observering a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    this.intersectionRatio = intersectionArea / targetArea;
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibilty state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its executiong, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child elemnt (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }
  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}(window, document));


/***/ }),

/***/ "../cms/templates/assets/js/vendor/lozad.js":
/*!**************************************************!*\
  !*** ../cms/templates/assets/js/vendor/lozad.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! lozad.js - v1.4.0 - 2018-04-22
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2018 Apoorv Saxena; Licensed MIT */
!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";function t(t){t.setAttribute("data-loaded",!0)}var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},r=document.documentMode,n={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=document.createElement("img");r&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.appendChild(e)}t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&(t.srcset=t.getAttribute("data-srcset")),t.getAttribute("data-background-image")&&(t.style.backgroundImage="url('"+t.getAttribute("data-background-image")+"')")},loaded:function(){}},o=function(t){return"true"===t.getAttribute("data-loaded")},a=function(e,r){return function(n,a){n.forEach(function(n){n.intersectionRatio>0&&(a.unobserve(n.target),o(n.target)||(e(n.target),t(n.target),r(n.target)))})}},i=function(t){return t instanceof Element?[t]:t instanceof NodeList?t:document.querySelectorAll(t)};return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".lozad",d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=e({},n,d),c=u.rootMargin,s=u.threshold,g=u.load,f=u.loaded,l=void 0;return window.IntersectionObserver&&(l=new IntersectionObserver(a(g,f),{rootMargin:c,threshold:s})),{observe:function(){for(var e=i(r),n=0;n<e.length;n++)o(e[n])||(l?l.observe(e[n]):(g(e[n]),t(e[n]),f(e[n])))},triggerLoad:function(e){o(e)||(g(e),t(e),f(e))}}}});


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map