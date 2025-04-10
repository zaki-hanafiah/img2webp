#!/usr/bin/env node

const { cosmiconfig } = require( "cosmiconfig" );
const chalk = require( "chalk" );

const img2webp = require( "../lib" );

const { info } = console;

/**
* ----------------------------------------------------------
*/

const runScript = () => {
  // Script start message
  info( chalk.gray( "> img2webp.js" ) );

  const explorer = cosmiconfig( "img2webp" );

  explorer.search()
    .then( ( result ) => {
      img2webp( result );
    } )
    .catch( ( error ) => {
      info( chalk.red( error ) );
    } );
};

runScript();
