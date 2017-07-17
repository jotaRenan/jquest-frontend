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
      dificulty: current.dificulty,
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
  $scope.getModules = (domainId) => {
    $scope.modulesList = $scope.domainsList.find( domainInList => domainInList.id === domainId).modules;
  };
  $scope.submitQuestion = () => {
    // Name adaptations in order to match backend entities
    $scope.question['headline'] = $scope.question['heading'];
    $scope.question['type'] = $scope.question['idt'];
    $scope.question['moduleId'] = $scope.question['selectedModuleId'];
    // Registers user's Id
    $scope.question['userId'] = JSON.parse(sessionStorage.getItem('userInfo')).id;
    // Sweet es6 destructuring
    const payload = {domainId, moduleId, userId, headline, dificulty, type} =  $scope.question;
    $http({
      method: 'POST',
      url: `http://localhost:8080/JQuestWebApplication/CreateQuestionServlet`,
      data: payload,
    })
  }
})
