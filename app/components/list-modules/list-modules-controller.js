angular.module('jQuest')

.controller('UserProfileCtrl', function($scope, $routeParams) {
  $http({
    method: 'GET',
    url: `http://localhost:8080/JQuestWebApplication/GetQuestionsBy?id=${$routeParams.userId}`,
  }).then(response => $scope.questions = response.data);
}
