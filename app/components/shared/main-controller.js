 angular.module('jQuest')

.controller('MainCtrl', function($scope, $log, $http, $location, $rootScope) {
  // TODO: add verification
  const temp = sessionStorage.getItem('hideLogin');
  $scope.hideLogin = !!temp;
  $scope.close = () => {
    $scope.hideLogin = true;
    sessionStorage.setItem('hideLogin', 'true');
  }

  $scope.logout = () => {
    sessionStorage.removeItem('loginFlag');
    sessionStorage.setItem('hideLogin', 'false');
    $scope.hideLogin = false;
    $rootScope.isUserLogged = false;
  }

  $scope.login = () => {
    if (sessionStorage.getItem('loginFlag')) {
      return;
    }
    $http ({
         method: 'POST',
         url: `http://localhost:8080/JQuestWebApplication/Login`,
         data: {email: $scope.credential.email, password: $scope.credential.password},
     })
      .then(response => {
        sessionStorage.setItem('userInfo', JSON.stringify(response.data));
        sessionStorage.setItem('hideLogin', 'true');
        $scope.hideLogin = true;
        $rootScope.isUserLogged = true;
        $location.path('/');
        $scope.credential = undefined;
      }, response => {
        if (response.status === 404) {
          // TODO: msg erro de login
          $scope.loginMessage = "Login inválido.";
        }
      });
  }
})
