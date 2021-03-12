// configuration
Vue.prototype.$cfg = {
    // general settings
    hostname: "", // if the endpoints are on a different url. @TODO: CORS settings must be implemented
    // picture settings
    magn: ['0','1','2','3','4'],
    magnfraction: ['0','1','2','3','4','5','6','7','8','9'],
    reduction: ['','0.3R','0.5R','1.0R','2.0R'],
    barlow: ['','0.5B','2.0B'],
    polarizer: ['','Pol', 'An', 'Pol+An'],
    immersion: ['','Water', 'Oil', 'Immersed'],
    // api endpoints
    streamEndpoint: "/api/picture/streampic.php",
    shotEndpoint: "/api/picture/shotpic.php"
}

