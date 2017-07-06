(function() {
    'use strict';

    angular.module('userApp')
        .controller('UserListController', UserListController);

    UserListController.$inject = ['userService'];

    function UserListController(userService) {
        var userListVm = this;


        init();

        function init() {
            console.log("user list controller invoked");
            userListVm.sorter = {
                sortBy: 'firstName',
                sortOrder: false
            };

            userService.getUsers()
                .then(function(data){
                    userListVm.users = data;
                })
        }



    }

})();
