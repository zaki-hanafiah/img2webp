/**
 * -----------------------------
 * Requires
 * -----------------------------
 */
const batchWebpConvert = require( "./batchWebpConvert" );
const validateOptions = require( "./validateOptions" );

/**
 * ----------------------------------------------------------
 */

const img2WebpConverter = ( options = null ) => {
  batchWebpConvert( validateOptions( options ) );
};

module.exports = img2WebpConverter;
