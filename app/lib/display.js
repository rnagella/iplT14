/*jslint devel: true, node: true, bitwise: false, debug: false, eqeq: false,
 evil: false, forin: false, newcap: false, nomen: false, plusplus: false,
 regexp: false, sub: false, vars: false, undef: false, unused: false,
 white: false, quotmark: single, indent: 2, maxlen: 80 */
/*global $, Alloy, alert, Ti, _, OS_IOS, OS_ANDROID, Promise */

'use strict';

exports.getNavBarHeight = function () {

  if (OS_IOS) {

    if (parseInt(Ti.Platform.version, 10) >= 7) {
      return '68';

    } else {
      return '48';
    }
  }

  if (OS_ANDROID) {
    return '48';
  }
};
