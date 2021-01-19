'use strict';

const  { PostMessage, Transport } = require('./utils')

/**
 * Option for the default low level transport.
 *
 * @type {Object}
 */
const defaultPostisOptions = {}

/**
 * The instance of Transport class that will be used by Meet.
 *
 * @type {Transport}
 */
let transport

/**
 * Returns the instance of Transport class that will be used by Meet.
 *
 * @returns {Transport}
 */
module.exports = function postisPlus (postisOptions) {
  if (!transport) {
    transport = new Transport({ backend: new PostMessage({ postisOptions: postisOptions || defaultPostisOptions }) })
  }
  return transport
}
