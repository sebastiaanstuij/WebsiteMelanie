"use strict";angular.module("websiteMelanieApp",["ngCookies","ngResource","ngRoute","ngSanitize","ui.bootstrap","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("websiteMelanieApp").controller("navbarController",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]),angular.module("websiteMelanieApp").controller("MainCtrl",["$scope",function(a){a.myInterval=5e3;a.slides=[{image:"..\\images\\slide_1\\Carousel_Large_M&R.jpg",title:"Engelse conversatie lessen met Melanie",subtitle:"Leer op een leuke en informele manier vloeiend Engels spreken"},{image:"..\\images\\slide_2\\Carousel_Large_M&H.jpg",title:"Individuele lessen",subtitle:"Individuele coaching, zodat u snel progressie boekt"},{image:"..\\images\\slide_3\\Carousel_Large_M&C&I.jpg",title:"Groepslessen",subtitle:"Ook groepslessen behoren tot te mogelijkheden"}]}]),angular.module("websiteMelanieApp").controller("AboutCtrl",["$scope",function(){}]),angular.module("websiteMelanieApp").controller("ContactCtrl",["$scope",function(){}]);