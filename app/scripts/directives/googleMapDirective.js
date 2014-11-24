angular.module('websiteMelanieApp').
    directive('googlemap', function() {
      return {
        restrict: 'C',
        link: function (scope, elem, attrs) {
          var mapOptions, markerOptions, map, marker, infoWindow;

          latitude = 53.106021;
          longitude = 6.103242;

          // map config
          mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(latitude, longitude),
            scrollwheel: false
          };

          map = new google.maps.Map(elem[0], mapOptions);

          // marker config
          markerOptions = {
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            title: 'Drachten, Friesland',
            icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
          };



          marker = new google.maps.Marker(markerOptions);


          google.maps.event.addListener(marker, 'click', function () {
            // close window if not undefined
            if (infoWindow !== void 0) {
              infoWindow.close();
            }
            // create new window
            var infoWindowOptions = {
              content: 'Drachten, Friesland'
            };
            infoWindow = new google.maps.InfoWindow(infoWindowOptions);
            infoWindow.open(map, marker);
          });
        }
      };
    });
