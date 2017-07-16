 angular.module('jQuest')

.controller('DiscussionCtrl', function($scope, $routeParams, $log, $http, $location) {
  const associarDadosChamada = (data) => {$scope.question = data.data;};
  // TODO: specify what couldnt be found (pass as parameter to the path)
  const exibirErro = () => $location.path('/not-found');
  $http ({
       method: 'GET',
       url: `http://localhost:8080/JQuestWebApplication/GetQuestionByIdServlet?id=${$routeParams.questionId}`
   })
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
      .then(associarDadosChamada, exibirErro);

  $scope.discussions = [
    {
      id : 123,
      userName : 'jotarenan',
      text : 'gosto de tirar fotinhas',
      userId :  11,
      comments : [
        {
          id : 01,
          userName : 'paulamr05',
          userId : 55,
          text : 'gosto de cachorrinhos',
        },
        {
          id : 02,
          userName : 'bacmariz',
          userId : 33,
          text : 'gosto de memes do whatsapp',
        }
      ]
    }
  ];
})
