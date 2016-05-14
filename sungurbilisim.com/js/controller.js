var modul= angular.module('app',['ngRoute']);
modul.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/anasayfa',{
		templateUrl:'anasayfa.html',
		controller:'Routecontroller'
	}).
	
	when('/ekip',{
		templateUrl: 'ekip.html',
		controller:'Routecontroller'
	}).
	when('/biz',{
		templateUrl: 'biz.html',
		controller:'Routecontroller'
	}).
	when('/web',{
		templateUrl: 'webprojelerimiz.html',
		controller:'Routecontroller'
	}).
	when('/sosyal',{
		templateUrl: 'sosyalprojelerimiz.html',
		controller:'Routecontroller'
	}).
	when('/iletisim',{
		templateUrl: 'iletisim.html',
		controller:'Routecontroller'
	}).
	otherwise({
		redirectTo:'/index1.html'
	})

}]);
modul.controller('Routecontroller',function($scope){});