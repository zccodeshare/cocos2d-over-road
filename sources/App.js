/**
 * Tooflya Inc. Development
 *
 * @author Igor Mats from Tooflya Inc.
 * @copyright (c) 2014 by Igor Mats
 * http://www.tooflya.com/development/
 *
 *
 * License: Tooflya Inc. Software License v1.
 *
 * Licensee may not use this software for commercial purposes. For the purpose of this license,
 * commercial purposes means that a 3rd party has to pay in order to access Software or that
 * the Website that runs Software is behind a paywall. In consideration of the License granted
 * under clause 2, Licensee shall pay Licensor a fee, via Credit-Card, PayPal or any other
 * mean which Licensor may deem adequate. Failure to perform payment shall construe as material
 * breach of this Agreement. This software is provided under an AS-IS basis and without any support,
 * updates or maintenance. Nothing in this Agreement shall require Licensor to provide Licensee with
 * support or fixes to any bug, failure, mis-performance or other defect in The Software.
 *
 * @version of cocos2d is 3.1 Final
 *
 */

/** @expose */
tooflya = {};

/**
 *
 *
 *
 */
App = {
  release: false,
  config: {
    debug: false,
    autostart: true,
    application: 10,
    platform: 0,
    graphics: {
      x: 640,
      y: 288
    },
    server: {
      url: 'www.tooflya.com',
      port: 8083,
      secure: false
    },
    orientations: {
      portrait: true,
      landscape: false
    },
    languages: [
      {iso: 'en', id: 0},
      {iso: 'ru', id: 1}
    ],
    info: {
      ad: {
        admob: {
          android: {
            banner: 'ca-app-pub-9938626987469103/1407982276',
            interstitial: 'ca-app-pub-9938626987469103/2884715472'
          }
        }
      }
    }
  }
};
