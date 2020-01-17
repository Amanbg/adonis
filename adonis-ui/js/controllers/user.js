angular.module('adonis.controllers').controller('user', ['$scope', 'toaster', '$window', '$filter', '$state', '$timeout', '$rootScope', '$http', '$cookies', function($scope, toaster, $window, $filter, $state, $timeout, $rootScope, $http, $cookies) {
    $scope.user = {}

    const APP_URL = 'http://localhost:3333'

    $scope.addUser = function(user) {
        $http.post(APP_URL + '/user', { data: user }).then(function(response) {
            toaster.pop('success', 'User', 'user added successfully');
            $scope.user = {}
            initLoad();
        })
    }

    function initLoad(){
    	$scope.userList = [];
    	$http.get(APP_URL+'/user').then(function(response){
    		$scope.userList = response.data;
    	})
    }

    initLoad()
}])