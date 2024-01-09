module.exports = ( SRC_DIR, PUBLIC_DIR ) => {
    const { registerFont, createCanvas } = require( 'canvas' )
    const fs = require( "fs" );
    const moment = require( "moment" );
    moment.locale( 'nl' );

    registerFont( SRC_DIR + '/font/Roboto-Regular.ttf', { family: 'RobotoRegular' } );

    const width = 768;
    const height = 1024;

    const canvas = createCanvas( width, height );
    const ctx = canvas.getContext( "2d" );
    
    // bg
    ctx.fillStyle = "#000000";
    ctx.fillRect( 0, 0, width, height );
    
    // date
    ctx.font = "24px RobotoRegular";
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top'
    ctx.fillStyle = "#fff";
    ctx.fillText( moment().format( 'LL' ), 10, 10 );
    
    // time
    ctx.font = "24px RobotoRegular";
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top'
    ctx.fillStyle = "#fff";
    ctx.fillText( moment().format( 'HH:mm:ss' ), canvas.width - 10, 10 );

    // header line
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo( 10, 48 );
    ctx.lineTo( canvas.width - 10, 48 );
    ctx.stroke();

    const buffer = canvas.toBuffer( "image/png" );
    fs.writeFileSync( PUBLIC_DIR + "/image.png", buffer );

    console.log( 'Rendered' );
}