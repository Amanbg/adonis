angular.module('adonis').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider,
    $urlRouterProvider, $locationProvider, $httpProvider) {

    var authToken = $('meta[name="adonis-session"]').attr('content');

    console.log('authoekee=>', authToken)
    $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;

    $stateProvider
        .state("home", {
            url: '/home',
            views: {
                "mainContent": {
                    'templateUrl': "index.html"
                }
            }
        })
    // .state("logout", {
    //     url: '/logout',
    //     views: {
    //         "mainContent": {
    //             'templateUrl': "views/auth/login.html"
    //         }
    //     }
    // })
    // .state("login", {
    //     url: '/',
    //     views: {
    //         "mainContent": {
    //             'templateUrl': "views/auth/login.html"
    //         },
    //         "sidebar": {
    //             'templateUrl': "views/no-sidebar.html"
    //         },
    //         "header": {
    //             'templateUrl': "views/no-header.html"
    //         },
    //         "footer": {
    //             'templateUrl': "views/no-footer.html"
    //         }
    //     }
    // })
    // .state("forget-password", {
    //     url: '/forget/password',
    //     views: {
    //         "mainContent": {
    //             'templateUrl': "views/forgetpassword.html"
    //         },
    //         "sidebar": {
    //             'templateUrl': "views/no-sidebar.html"
    //         },
    //         "header": {
    //             'templateUrl': "views/no-header.html"
    //         },
    //         "footer": {
    //             'templateUrl': "views/no-footer.html"
    //         }
    //     }
    // })
    // .state("resetpassword", {
    //     url: '/passwordreset',
    //     views: {
    //         "mainContent": {
    //             'templateUrl': "views/resetpassword.html"
    //         }
    //     }
    // })
    // .state("signup", {
    //     url: '/register',
    //     views: {
    //         "mainContent": {
    //             'templateUrl': "views/register.html"
    //         }
    //     }
    // })
    // .state("otherwise", {
    //     url: '*path',
    //     views: {
    //         "mainContent": {
    //             'templateUrl': "views/404.html"
    //         },
    //         "sidebar": {
    //             'templateUrl': "views/sidebar.html"
    //         },
    //         "header": {
    //             'templateUrl': "views/header.html"
    //         },
    //         "footer": {
    //             'templateUrl': "views/footer.html"
    //         }
    //     }
    // })
}])