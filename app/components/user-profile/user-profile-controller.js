 angular.module('jQuest')

 .controller('UserProfileCtrl', function($scope, $routeParams) {
  // TODO: send the requests to the backend so it returns data of a user given its Id ($routeParams.userId)
  $scope.user = {
    username : 'jotaRenan',
    answeredQuestions : 9001,
    correctAnswersRatio : 1.01,
    entryDate : '03-07-2017',
    ownQuestions : [ { id : 1007, shortDesc : 'Como faço para comer caqui?' },
      { id : 1008, shortDesc : 'Como faço para ganhar seguidores?'}
    ],
    latestPosts: [],
  }
  $scope.quantity = 3;
})
