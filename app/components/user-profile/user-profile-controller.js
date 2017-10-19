 angular.module('jQuest')

 .controller('UserProfileCtrl', function($scope, $routeParams, $http) {
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
  };
  $http({
    method: 'GET',
    url: `http://localhost:8080/JQuestWebApplication/GetUserByIdServlet?id=${$routeParams.userId}`,
  }).then(response => $scope.user = response.data);
  $scope.quantity = 3;

  let ctx = document.querySelector("#progressChart");

  let barChart = new Chart(ctx, {
      type: 'pie',
     data: {
            labels: ["Acertos", "Erros"],
            datasets: [{
                label: 'Numero de questões',
                data: [12, 5],
                backgroundColor: [
                    'rgba(0, 204, 0, 0.6)',
                    'rgba(255, 0, 0, 0.6)'

                ],
                borderColor: [
                    'rgba(0, 204, 0, 0.8)',
                    'rgba(255, 0, 0, 0.8)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: { display: false},
            responsive: false,
            maintainAspectRatio: false
        }
  });

})
