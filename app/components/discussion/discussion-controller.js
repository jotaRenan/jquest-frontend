 angular.module('jQuest')

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
