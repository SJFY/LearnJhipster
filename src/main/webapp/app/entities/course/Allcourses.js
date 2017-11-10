(function() {
    'use strict';
    angular
        .module('newtestApp')
        .factory('AllCourses', AllCourses);

    AllCourses.$inject = ['$resource'];

    function AllCourses ($resource) {
        var resourceUrl =  'api/allcourses';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
