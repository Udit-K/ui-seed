(function() {
    'use strict';

    angular
        .module('userApp')
        .directive('businessCard', businessCard);


    function businessCard() {
        var directive = {
            scope: {
                person: "="
            },
            templateUrl: 'business-card.tmpl.html'
        };

        return directive;
    }
})();