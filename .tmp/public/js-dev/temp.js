(function() {

    function renderMap() {
        var mapOptions = {
            center: new google.maps.LatLng(-34.397, 150.644),
            zoom: 8
        };
        var map = new google.maps.Map(document.getElementsByClassName("map")[0], mapOptions);
    }

    google.maps.event.addDomListener(window, 'load', renderMap);

})();