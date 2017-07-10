 angular.module('jQuest')

 .controller('MyQuestionsCtrl', function($rootScope, $location) {
    $rootScope.activetab = $location.path();
 })