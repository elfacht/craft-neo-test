// Plugins
require('./vendor/intersection-observer');
const lozad = require('./vendor/lozad.js');

// Modules
import {constConsent} from './mjs/Constants.js';
import scroller from './mjs/Scroller.js';
import backToTop from './mjs/BackToTop.js';
import {consent}  from './mjs/Consent.js';


// DOM ready
(function() {

  /**
   * Cookie consent
   */
  const $consent = document.querySelector(constConsent.wrapper);
  if ($consent) {
    consent($consent);
  }


  /**
   * Init back to top link
   */
  const $backtotop = document.querySelector('[data-backtotop]');
  if ($backtotop) {
    backToTop($backtotop);
  }




  /**
   * Init animated scrolling
   */
  const $scroller = document.querySelectorAll('[data-scroller]');
  if ($scroller) {
    scroller($scroller);
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
