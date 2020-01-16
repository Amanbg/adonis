angular.module('adonis.controllers').controller('user', ['$scope', 'toaster', '$window', '$filter', '$state', '$timeout', '$rootScope', '$http',function($scope, toaster, $window, $filter, $state, $timeout, $rootScope, $http) {
    $scope.user = {}

    const API_URL = 'localhost:3333'
    $scope.addUser = function(user) {
        $http.post(API_URL+'/user', { data: user }).then(function(response) {
            toaster.pop('success', 'User', 'user added successfully');
            $scope.user = {}
        })
    }

}])