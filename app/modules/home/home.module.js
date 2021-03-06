(function() {
    'use strict';
    angular.module( 'myApp.home', [
        'ui.router',
        'ui.bootstrap'
    ])
    .config(['$stateProvider', function config($stateProvider) {
            $stateProvider.state('home', {
                url: '/home',
                parent:'app',
                views: {
                    "": {
                        controller: 'HomeCtrl as homeCtrl',
                        templateUrl: 'modules/home/home.tpl.html'
                    }
                },
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load('modules/home/home.controller.js');
                    }]
                },
                data: { pageTitle: 'Home' }
            });
        }]);
})();
