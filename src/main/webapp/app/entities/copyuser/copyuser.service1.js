(function() {
    'use strict';
    angular
        .module('newtestApp')
        .factory('Copyuser1', Copyuser1);

    Copyuser1.$inject = ['$resource'];

    function Copyuser1 ($resource) {
        var resourceUrl =  'api/copyusers/:id';

        var cufac = {};

        cufac.getcus = function(){
            return $resource(resourceUrl,null,{'update':{method:'PUT'}});
        };

        return cufac;

    }
})();
