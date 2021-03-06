 angular.module('jQuest')

.controller('ListQuestionsCtrl', function($scope, $log, $http) {
  $scope.quantity = 10;
  $http ({
       method: 'GET',
       url: `http://localhost:8080/JQuestWebApplication/GetQuestionsServlet`
   })
    .then( response => {
       $scope.questions = response.data;
       $scope.questions.forEach(q => q.correctIndex -= 1);
  });

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
    const questionToBeChecked = $scope.questions.find(q => q.id == questionId);

    // DONE: change css based on this
    if (questionToBeChecked.idt === 'M') {
      questionToBeChecked.status = questionToBeChecked.correctIndex === questionToBeChecked.selectedValue ? 'acerto disgrace' : 'errouuu';
      let questIndex = '' + questionToBeChecked.id + questionToBeChecked.correctIndex;
      let questionElement = angular.element(document.getElementById(questIndex).parentNode);
      questionElement.addClass('showCorrect');
    } else if (questionToBeChecked.idt === 'V') {
      const wrongAnswers = questionToBeChecked.alternatives.filter(alt => alt.isCorrect !== alt.selectedValue);
      questionToBeChecked.status = wrongAnswers.length === 0 ? `Acertô mizeravi` : `Erooou`;
    }
    // TODO: if user is logged


  }

})
