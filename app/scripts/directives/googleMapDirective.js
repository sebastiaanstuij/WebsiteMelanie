angular.module('websiteMelanieApp').
    directive('googlemap', function() {
      return {
        restrict: 'C',
        link: function (scope, elem, attrs) {
          console.log('poep');
          var mapOptions,
            latitude = attrs.latitude,
            longitude = attrs.longitude,
            map;

          latitude = latitude && parseFloat(latitude, 10) || 43.074688;
          longitude = longitude && parseFloat(longitude, 10) || -89.384294;

          mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(latitude, longitude)
          };

          map = new google.maps.Map(elem[0], mapOptions);
        }
      };
    });
