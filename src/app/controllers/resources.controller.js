(function () {
  'use strict';

  angular
      .module('userApp')
      .controller('ResourceController', ResourceController);

    ResourceController.$inject = [];
    function ResourceController() {


        init();

        function init() {
            console.log("ResourceController invoked");
        }


    }


}

)();