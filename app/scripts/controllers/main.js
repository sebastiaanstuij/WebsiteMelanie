'use strict';

/**
 * @ngdoc function
 * @name websiteMelanieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteMelanieApp Main page
 */
angular.module('websiteMelanieApp')
  .controller('MainCtrl', function ($scope) {

        $scope.myInterval = 5000;
        var slides = $scope.slides = [
            {
                image: '/images/slide-1/carousel-large-mr.jpg',
                title: 'Engelse conversatie lessen met Melanie',
                subtitle: 'Leer op een leuke en informele manier vloeiend Engels spreken'
            },
            {
                image: '../images/slide-2/carousel-large-mh.jpg',
                title: 'Individuele lessen',
                subtitle: 'Individuele coaching, zodat u snel progressie boekt'
            },
            {
                image: '../images/slide-3/carousel-large-mci.jpg',
                title: 'Groepslessen',
                subtitle: 'Ook groepslessen behoren tot te mogelijkheden'
            }
        ];



  });
