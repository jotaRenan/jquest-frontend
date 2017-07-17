 angular.module('jQuest')

.controller('InsertQuestionCtrl', function($scope, $log, $http) {
  // Skeleton of how the new question object is
  $scope.question = {
    heading : '',
    domainId : undefined,
    selectedModuleId : undefined,
    alternatives : [],
    idt : 'A',
  }
  $http ({
       method: 'GET',
       url: `http://localhost:8080/JQuestWebApplication/GetDomainsFullDataServlet`
   })
    .then(response => $scope.domainsList = response.data);
  // Default value for when a domain is not selected
  $scope.modulesList = [{name: '----', id: '',}];
  $scope.selectedModule = $scope.modulesList[0];

  $scope.reset = tipo => {
    const current = $scope.question;
    const temp = {
      heading : current.heading,
      domainId : current.domainId,
      selectedModuleId : current.selectedModuleId,
      idt : tipo,
    }
    if (tipo != 'A') {
      temp.alternatives = Array(5).fill('');
    } if (tipo === 'V') {
      for (let i=0; i< temp.alternatives.length; i++) {
        temp.alternatives[i] = {assertive : '', isCorrect : false};
      }
    }
    $scope.question = temp;
  }
  // Populates Modules dropdown after a domain is selected
  // TODO: change values of modulesList after request to backend
  $scope.getModules = (domainId) => {
    $scope.modulesList = $scope.domainsList.find( domainInList => domainInList.id === domainId).modules;
  }
})
