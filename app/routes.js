function config($routeProvider, $locationProvider) {

  // Leia a Nota sobre o HTML5Mode posteriormente
  $locationProvider.html5Mode(true);

  $routeProvider

    // Rota para a Home
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    })

    // Rota para a página About
    .when('/login', {
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

    // Rota para a página Contact
    .when('/register', {
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl'
    })

    // Rota para a página Avengers
    .when('/advanced-search', {
      templateUrl: 'templates/advanced-search.html',
      controller: 'AdvancedSearchCtrl',
      controllerAs: 'avengers'
    })

    // Rota para a página Avengers
    .when('/insert-question', {
      templateUrl: 'templates/insert-question.html',
      controller: 'InsertQuestionCtrl',
    })

    // Rota para a página Avengers
    .when('/edit-question', {
      templateUrl: 'templates/edit-question.html',
      controller: 'EditQuestionCtrl',
    })


    // Rota para a página Avengers
    .when('/question', {
      templateUrl: 'templates/question.html',
      controller: 'QuestionCtrl',
    })

    // Rota para a página Avengers
    .when('/user-profile', {
      templateUrl: 'templates/user-profile.html',
      controller: 'UserProfileCtrl',
    })


    // Rota para a página Avengers
    .when('/edit-profile', {
      templateUrl: 'templates/edit-profile.html',
      controller: 'EditProfileCtrl',
    })

    // Rota para a página Avengers
    .when('/my-questions', {
      templateUrl: 'templates/my-questions.html',
      controller: 'MyQuestionsCtrl',
    })


    // Rota para a página Avengers
    .when('/my-discussions', {
      templateUrl: 'templates/my-discussions.html',
      controller: 'MyDiscussionsCtrl',
    })

    // Rota para a página Avengers
    .when('/my-discussions', {
      templateUrl: 'templates/my-discussions.html',
      controller: 'MyDiscussionsCtrl',
    })

    // Rota para a página Avengers
    .when('/modules-management', {
      templateUrl: 'templates/modules-management.html',
      controller: 'ModulesManagementCtrl',
    })

    // Rota para a página Avengers
    .when('/domain-management', {
      templateUrl: 'templates/domain-management.html',
      controller: 'DomainManagementCtrl',
    })

    // Rota para a página Avengers
    .when('/dissertive-question-correction', {
      templateUrl: 'templates/dissertive-question-correction.html',
      controller: 'DissertiveQuestionsCorrectionCtrl',
    })

    // Caso não seja nenhum desses,
    // redirecione para a rota '/'
    .otherwise ({ redirectTo: '/' });
};

angular
  .module('jQuest')
  .config(config);
