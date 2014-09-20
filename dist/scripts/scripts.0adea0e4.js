"use strict";angular.module("websiteMelanieApp",["ngCookies","ngResource","ngRoute","ngSanitize","ui.bootstrap","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("websiteMelanieApp").controller("navbarController",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]),angular.module("websiteMelanieApp").controller("MainCtrl",["$scope",function(a){a.myInterval=5e3;a.slides=[{image:"/WebsiteMelanie/images/slide-1/carousel-large-mr.ac76196a.jpg",title:"Engelse conversatie lessen met Melanie",subtitle:"Leer op een leuke en informele manier vloeiend Engels spreken"},{image:"../images/slide-2/carousel-large-mh.95de8abf.jpg",title:"Individuele lessen",subtitle:"Individuele coaching, zodat u snel progressie boekt"},{image:"../images/slide-3/carousel-large-mci.8ecf0928.jpg",title:"Groepslessen",subtitle:"Ook groepslessen behoren tot te mogelijkheden"}]}]),angular.module("websiteMelanieApp").controller("AboutCtrl",["$scope",function(){}]),angular.module("websiteMelanieApp").controller("ContactCtrl",["$scope",function(){}]);