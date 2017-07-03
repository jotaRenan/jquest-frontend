const app = angular.module('jQuest',['ngRoute'])

.controller('MyQuestionsCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
})

.controller('RegisterCtrl', function($scope, $location)
{
   $scope.nome = 'ayy lmao';
})

.controller('ListQuestionsCtrl', function($scope) {
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

.controller('UserProfileCtrl', function($scope) {
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
})

.directive('jqNavbar', function() {
  return {
    restrict: 'E',
    templateUrl : 'app/components/shared/navbar.html'
  };
});
