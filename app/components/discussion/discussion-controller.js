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

  $scope.confirmQuestion = (questionId) => {
    const MAX_QUESTIONS = 10;
    // if user isnt logged
    const currentlyAnswered = JSON.parse(localStorage.getItem('answered'));
    if (currentlyAnswered == null) {
      localStorage.setItem('answered', JSON.stringify([questionId]));
    } else if (currentlyAnswered.length == MAX_QUESTIONS && !currentlyAnswered.includes(questionId)) {
      alert(`Você já respondeu ${MAX_QUESTIONS} questões. Faça login para poder responder mais.`);
    } else if ( !currentlyAnswered.includes(questionId)) {
      currentlyAnswered.push(questionId);
      localStorage.setItem('answered', JSON.stringify(currentlyAnswered));
    }
    const questionToBeChecked = $scope.question;
    // TODO: change css based on this
    questionToBeChecked.status = questionToBeChecked.correctIndex === questionToBeChecked.selectedValue ? 'acerto disgrace' : 'errouuu';
    // TODO: if user is logged

  }
  $scope.discussions = [
    {
      id : 123,
      text : 'gosto de tirar fotinhas',
      user : {
        name : 'jotarenan',
        id : 11
      },
      comments : [ {
          id : 01,
          user : {
            name: 'paulamr05',
            id : 55,
          },
          text : 'gosto de cachorrinhos',
        },
        {
          id : 02,
          user : {
            name: 'bacmariz',
            id: 33,
          },
          text : 'gosto de memes do whatsapp',
        }
      ]
    }
  ];
})
