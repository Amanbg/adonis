angular.module('adonis', [
        'ui.router',
        'adonis.controllers',
        //'ngSanitize',
        //'ngResource',
        //'adonis.services',
        'toaster',
        //'ngAnimate',
        //'adonis.env'
    ])
    .run(['$rootScope', '$state', '$window', '$timeout', '$document', '$location', '$http', function($rootScope, $state, $window, $timeout, $document, $location, $http) {

    }]);
angular.module('adonis.controllers', [])