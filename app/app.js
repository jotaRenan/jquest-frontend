const app = angular.module('jQuest',['ngRoute'])

.controller('MyQuestionsCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
})

.controller('RegisterCtrl', function($scope, $location)
{
   $scope.nome = 'ayy lmao';
})

.controller('DiscussionCtrl', function($scope, $routeParams) {
  // TODO: send the requests to the backend so it returns data of a question given its Id ($routeParams.questionId)
  $scope.question = {
      id: 123,
      heading : `Os microtúbulos são elementos constituintes do citoplasma das células. Assinale a alternativa abaixo que descreve CORRETAMENTE a funções desses microtúbulos.`,
      isMultipleChoice : true,
      alternatives : [
        'Concentração muscular e constituição do citoesqueleto.',
        'Contração muscular e orientação da divisão celular.',
        'Manutenção da forma da célula e formação do fuso mitótico.',
        'Formação do fuso mitótico e movimentos ameboídes.',
        'Deslocamentos do cromossomos e movimentos ameboídes'
      ]
  };
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

.controller('ListQuestionsCtrl', function($scope) {
  $scope.quantity = 10;
  //simulates json response
  $scope.questions = [
    {
      id: 876,
      heading : 'Cite alguns fatores que favorecem o aumento da dependência do cigarro no Brasil.',
      isMultipleChoice : false
    },
    {
      id: 123,
      heading : `Os microtúbulos são elementos constituintes do citoplasma das células. Assinale a alternativa abaixo que descreve CORRETAMENTE a funções desses microtúbulos.`,
      isMultipleChoice : true,
      alternatives : [
        'Concentração muscular e constituição do citoesqueleto.',
        'Contração muscular e orientação da divisão celular.',
        'Manutenção da forma da célula e formação do fuso mitótico.',
        'Formação do fuso mitótico e movimentos ameboídes.',
        'Deslocamentos do cromossomos e movimentos ameboídes'
      ]
    },
    {
      id: 124,
      heading : `Duas cargas de 2.10^-5 e -6.10^-5 C estão no vácuo a 3m de distância uma da outra. Qual a intensidade da força entre elas?`,
      isMultipleChoice : true,
      alternatives : [
        '0,12N',
        '1,2N',
        '12N',
        '120N',
        '1200N'
      ]
    }
  ]
})

.controller('MainCtrl', function($scope, $log) {
  // TODO: add verification
  const temp = sessionStorage.getItem('hideLogin');
  $scope.hideLogin = !!temp;
  $scope.close = () => {
    $scope.hideLogin = true;
    sessionStorage.setItem('hideLogin', 'true');
  }
})

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

.directive('jqNavbar', function() {
  return {
    restrict: 'E',
    templateUrl : 'app/components/shared/navbar.html'
  };
});
