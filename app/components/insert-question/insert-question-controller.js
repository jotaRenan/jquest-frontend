 angular.module('jQuest')

.controller('InsertQuestionCtrl', function($scope, $log) {
  // Skeleton of how the new question object is
  $scope.question = {
    heading : '',
    domainId : undefined,
    selectedModuleId : undefined,
    alternatives : [],
    idt : 'A',
  }
  // Simulates JSON
  $scope.domainsList = [
    {
      name : 'Matemagica',
      id : 123,
    },
    {
      name : 'Banco de dados',
      id : 11,
    }
  ];
  // Default value for when a domain is not selected
  $scope.modulesList = [{name: '----', id: '',}];
  $scope.selectedModule = $scope.modulesList[0];

  $scope.reset = tipo => {
    const temp = {
      heading : '',
      domainId : undefined,
      selectedModuleId : undefined,
      idt : tipo,
    }
    if (tipo != 'A') {
      temp.alternatives = Array(5).fill('');
    } if (tipo === 'V') {
      temp.alternatives.fill( {assertive : '', isCorrect : false});
    }
    $scope.question = temp;
  }
  // Populates Modules dropdown after a domain is selected
  // TODO: change values of modulesList after request to backend
  $scope.getModules = (domainId) => {
    if (domainId == 123) {
      $scope.modulesList = [
        {
          name : 'Trig',
          id : 99,
        },
        {
          name : 'Matrizes',
          id : 1,
        }
      ]
    }
  }
})
