/**
 * Created by Sebastiaan Stuij on 31-8-2014.
 */

angular.module('websiteMelanieApp')
    .controller('navbarController', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.doCollapse = function() {
            $scope.isCollapsed=true;
        };

        // SEO REQUIREMENT:
        // PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
        // we are finished with this controller.
        // See: http://lawsonry.com/p?11040
        $scope.htmlReady();

    });
