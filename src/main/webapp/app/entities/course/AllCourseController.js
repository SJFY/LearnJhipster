(function() {
    'use strict';

    angular
        .module('newtestApp')
        .controller('AllCourseController', AllCourseController);
    AllCourseController.$inject = ['DataUtils', 'AllCourses'];
    function AllCourseController(DataUtils, AllCourses) {

        var vm = this;

        vm.courses = [];
        vm.openFile = DataUtils.openFile;
        vm.byteSize = DataUtils.byteSize;

        loadAll();

        function loadAll() {
            AllCourses.query(function(result) {
                vm.courses = result;
                vm.searchQuery = null;
            });
        }
    }
})();
