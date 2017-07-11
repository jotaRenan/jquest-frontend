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

  let ctx = document.querySelector("#testChart");

  let barChart = new Chart(ctx, {
      type: 'horizontalBar',
     data: {
            labels: ["Erros", "Acertos"],
            datasets: [{
                label: 'Numero de Questões',
                data: [12, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        min: 0,
                        stepSize: 2
                    }
                }],
                yAxes: [{
                    ticks: {
                        
                    }
                }]
            }
        }
  });
})
