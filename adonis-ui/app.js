angular.module('adonis', [
        'ui.router',
        'adonis.controllers',
        //'ngSanitize',
        //'ngResource',
        //'adonis.services',
        'ngCookies',
        'toaster',
        //'ngAnimate',
        //'adonis.env'
    ])
    .run(['$rootScope', '$state', '$window', '$timeout', '$document', '$location', '$http', '$cookies', function($rootScope, $state, $window, $timeout, $document, $location, $http, $cookies) {

    }]);
angular.module('adonis.controllers', [])