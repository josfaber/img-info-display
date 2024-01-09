const express = require( 'express' );
const render = require( './render' );
const app = express();

const SRC_DIR = __dirname;
const PUBLIC_DIR = SRC_DIR + '/../public';

app.use( express.static( PUBLIC_DIR ) );

app.listen( 3001, () => {
    console.log( 'Server is running on port 3001' );
} );

render( SRC_DIR, PUBLIC_DIR );
setInterval( () => render( SRC_DIR, PUBLIC_DIR ), 10000 );