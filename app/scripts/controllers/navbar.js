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
        }
    });