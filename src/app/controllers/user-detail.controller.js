(function() {
    'use strict';

    angular.module('userApp')
        .controller('UserDetailController', UserDetailController);

    UserDetailController.$inject = ['userService', '$routeParams'];

    function UserDetailController(userService, $routeParams) {
        var userVm = this;

        userVm.get

        init();

        function init() {
            console.log("userdetail invoked");
            console.log($routeParams);
            userService.getUser($routeParams.id)
                .then(function(response) {
                    userVm.user = response;
                }, function(error) {
                    console.log(error);
                })


        }



    }

})();
