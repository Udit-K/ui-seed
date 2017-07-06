(function() {
    'use strict';

    angular.module('userApp')
        .service('userService', userService);


    userService.$inject = ['$http', '$q', 'CONFIG'];

    function userService($http, $q, CONFIG) {
        var self = this;
        self.getUsers = getUsers;
        self.getUser = getUser;
        self.createUser = createUser;

        function getUsers() {

            return $http.get(CONFIG.API_HOST + '/users')
                .then(successFn, errorFn);

        }

        function getUser(id) {

            return $http.get(CONFIG.API_HOST  + '/users/' + id)
                .then(successFn, errorFn);

        }

        function createUser(user) {

            return $http.post('http://mocker.egen.io/users', user)
                .then(successFn, errorFn);

        }

        function successFn(response) {
            return response.data; //RESOLVE
        }

        function errorFn(response) {
            return $q.reject(error.statusText); //REJECT
        }




    }
})();