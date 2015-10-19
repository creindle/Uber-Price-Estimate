(function(){
  "use strict";

  var origin = [21.3088619,-157.8086674]; // mic

  var map = L.map('map').setView(origin, 17);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

  var originMarker = L.marker(origin).addTo(map);

})();