(function() {
    'use strict';

    angular
        .module('userApp', ['ngRoute', 'ngMessages'])
        .config(moduleConfig)
        .run(runModule);


    moduleConfig.$inject = ['$routeProvider'];
    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/user-list', {
                templateUrl: 'app/views/users.tmpl.html',
                controller: 'UserListController',
                controllerAs: 'userListVm'
            })
            .when('/user-detail/:id', {
                templateUrl: 'app/views/user-detail.tmpl.html',
                controller: 'UserDetailController',
                controllerAs: 'userVm'
            })
            .when('/add-user', {
                templateUrl: 'app/views/add-user.tmpl.html',
                controller: 'AddUserController',
                controllerAs: 'addUserVm'
            })
            .otherwise({redirectTo: '/user-list'});

    }

    runModule.$inject = [];
    function runModule() {
        console.log("in runModule");
    }

})();