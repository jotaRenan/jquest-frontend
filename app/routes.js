app.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      // Rota para a página Login
      .when('/login', {
        templateUrl: './app/components/login/login.html',
        controller: 'LoginCtrl'
      })
      // Rota para a página Register
      .when('/register', {
        templateUrl: './app/components/register/register.html',
        controller: 'RegisterCtrl'
      })
      // Rota para a página Advanced Search
      .when('/advanced-search', {
        templateUrl: 'templates/advanced-search.html',
        controller: 'AdvancedSearchCtrl',
        controllerAs: 'avengers'
      })
      // Rota para a página Insert Question
      .when('/insert-question', {
        templateUrl: './app/components/insert-question/insert-question.html',
        controller: 'InsertQuestionCtrl',
      })
      // Rota para a página List Questions
      .when('/list-questions', {
        templateUrl: './app/components/list-questions/list-questions.html',
        controller: 'ListQuestionsCtrl',
      })
      // Rota para a página Edit Question
      .when('/edit-question', {
        templateUrl: 'templates/edit-question.html',
        controller: 'EditQuestionCtrl',
      })
      // Rota para a página Question
      .when('/question/:questionId', {
        templateUrl: './app/components/discussion/discussion.html',
        controller: 'DiscussionCtrl',
      })
      // Rota para a página User Profile
      .when('/user-profile/:userId?', {
        templateUrl: './app/components/user-profile/user-profile.html',
        controller: 'UserProfileCtrl',
      })
      // Rota para a página Edit Profile
      .when('/edit-profile', {
        templateUrl: 'templates/edit-profile.html',
        controller: 'EditProfileCtrl',
      })
      // Rota para a página My Questions
      .when('/my-questions', {
        templateUrl: './app/components/my-questions/my-questions.html',
        controller: 'MyQuestionsCtrl',
      })
      // Rota para a página My Discussions
      .when('/my-discussions', {
        templateUrl: 'templates/my-discussions.html',
        controller: 'MyDiscussionsCtrl',
      })
      .when('/domains', {
        templateUrl: './app/components/list-domains/list-domains.html',
        controller: 'ListDomainsCtrl',
      })
      .when('/modules/:domainId/:moduleId', {
        templateUrl: './app/components/list-modules/list-modules.html',
        controller: 'ListModulesCtrl',
      })
      /*
      // Rota para a página My Discussions
      .when('/my-discussions', {
        templateUrl: 'templates/my-discussions.html',
        controller: 'MyDiscussionsCtrl',
      })
      */

      // Rota para a página Modules Management
      .when('/manage-modules', {
        templateUrl: './app/components/manage-modules/manage-modules.html',
        controller: 'ManageModulesCtrl as ctrl',
      })
      // Rota para a página Domains Management
      .when('/manage-domains', {
        templateUrl: './app/components/manage-domains/manage-domains.html',
        controller: 'ManageDomainsCtrl',
      })
      // Rota para a página Dissertive Question Correction
      .when('/question-correction', {
        templateUrl: './app/components/question-correction/question-correction.html',
        controller: 'QuestionCorrectionCtrl',
      })
      .when('/not-found', {
        templateUrl: './app/components/shared/not-found.html'
      })
      .otherwise({
          redirectTo : '/list-questions'
      });
    }
 ]
);
