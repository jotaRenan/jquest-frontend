const app = angular.module('jQuest',['ui.router']);

app.controller('MyQuestionsCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});
