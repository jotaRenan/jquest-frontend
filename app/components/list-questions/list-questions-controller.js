 angular.module('jQuest')

.controller('ListQuestionsCtrl', function($scope, $log) {
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
      ],
      correctIndex : 2,
      module : 'Citologia',
      domain : 'Física',
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
      ],
      correctIndex : 0,
      module : 'Elétrica',
      domain : 'Física',
    }
  ]
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
    // TODO: change css based on this
    questionToBeChecked.status = questionToBeChecked.correctIndex === questionToBeChecked.selectedValue ? 'acerto disgrace' : 'errouuu';
    // TODO: if user is logged

  }

})
