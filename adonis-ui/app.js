angular
    .module('adonis', [
        'ui.router',
        'adonis.controllers',
        'ngSanitize',
        'ngResource',
        'adonis.services',
        'toaster',
        'ngAnimate',
        'adonis.directives',
        'adonis.env'
    ])
    .run(['$rootScope', '$state', '$window', '$cookies', '$timeout', '$document', '$location', 'ENV', '$translate', 'Requests', 'editableOptions', 'editableThemes', '$http', 'UiLogService', function($rootScope, $state, $window, $cookies, $timeout, $document, $location, ENV, $translate, Requests, editableOptions, editableThemes, $http, UiLogService) {

    }])angular.module('adonis.controllers', [])