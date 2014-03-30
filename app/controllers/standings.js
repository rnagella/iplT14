/*jslint devel: true, node: true, bitwise: false, debug: false, eqeq: false,
evil: false, forin: false, newcap: false, nomen: false, plusplus: false,
regexp: false, sub: false, vars: false, undef: false, unused: false,
white: false, quotmark: single, indent: 2, maxlen: 80 */

/*global $, Alloy, alert, Ti, _, OS_IOS, OS_ANDROID, Promise */

'use strict';

// utility modules.
var display = require('display');

// module scoped variables.
var standingsObject = [
  {
    'Team': 'Chennai Super Kings',
    'Pld': 0,
    'W': 0,
    'L': 0,
    'NR': 0,
    'Pts': 0,
    'NRR': 0.000,
    'image': 'cskLong.png'
  },
  {
    'Team': 'Delhi Daredevils',
    'Pld': 0,
    'W': 0,
    'L': 0,
    'NR': 0,
    'Pts': 0,
    'NRR': 0.000,
    'image': 'ddLong.png'
  },
  {
    'Team': 'Kings XI Punjab',
    'Pld': 0,
    'W': 0,
    'L': 0,
    'NR': 0,
    'Pts': 0,
    'NRR': 0.000,
    'image': 'kxipLong.png'
  },
  {
    'Team': 'Kolkata Knight Riders',
    'Pld': 0,
    'W': 0,
    'L': 0,
    'NR': 0,
    'Pts': 0,
    'NRR': 0.000,
    'image': 'kkrLong.png'
  },
  {
    'Team': 'Mumbai Indians',
    'Pld': 0,
    'W': 0,
    'L': 0,
    'NR': 0,
    'Pts': 0,
    'NRR': 0.000,
    'image': 'miLong.png'
  },
  {
    'Team': 'Rajasthan Royals',
    'Pld': 0,
    'W': 0,
    'L': 0,
    'NR': 0,
    'Pts': 0,
    'NRR': 0.000,
    'image': 'rrLong.png'
  },
  {
    'Team': 'Royal Challengers Bangalore',
    'Pld': 0,
    'W': 0,
    'L': 0,
    'NR': 0,
    'Pts': 0,
    'NRR': 0.000,
    'image': 'rcbLong.png'
  },
  {
    'Team': 'Sunrisers Hyderabad',
    'Pld': 0,
    'W': 0,
    'L': 0,
    'NR': 0,
    'Pts': 0,
    'NRR': 0.000,
    'image': 'shLong.png'
  }
];


// Immediate initialization.
(function () {

  $.navBar.height = display.getNavBarHeight();
  $.content.top = display.getNavBarHeight();

  var data = [], i;

  // data items.
  _.each(standingsObject, function (standingObject) {
    data.push({
      logoView: {image: '/images/' + standingObject.image},
      played: {text: standingObject.Pld || 0},
      win: {text: standingObject.W || 0},
      lost: {text: standingObject.L || 0},
      noResult: {text: standingObject.NR || 0},
      points: {text: standingObject.Pts || 0},
      netRunRate: {text: standingObject.NRR || 0},
      properties: {
        height: 60
      }
    });
  });

  $.listSection.items = data;

}());
