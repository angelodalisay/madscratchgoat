var SimpleSoundCloud = require('simple-soundcloud')(LN3SusIrooc6p3hLaU2ehltKb5u21R3b); 
var soundcloudUser = new SimpleSoundCloud.User(1);

function Soundcloud() {
    soundcloudUser.details();

    console.log("it works!");
}

// Soundcloud();