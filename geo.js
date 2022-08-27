let _getCurrentPosition = navigator.geolocation.getCurrentPosition;
navigator.geolocation.getCurrentPosition = function(f) {
    console.info("fake");
    _getCurrentPosition(function(p) {
        p.coords.longitude = 121.6703415;
        p.coords.latitude = 31.1924494;
        console.info("fake success");
        f(p);
    });
}

navigator.geolocation.getCurrentPosition = function(f) {
    var result = {
        coords: {
            accuracy: 16.826,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            latitude: 31.24309,
            longitude: 121.48789,
            speed: null,
        },
        timestamp: Date.now()
    }
    console.info("fake geolocation", JSON.stringify(result));
    f(result);
}

navigator.geolocation.watchPosition = function(success, error, options) {
    console.info("fake watcher");
}