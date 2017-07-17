 angular.module('jQuest')

.controller('MainCtrl', function($scope, $log, $http) {
  // TODO: add verification
  const temp = sessionStorage.getItem('hideLogin');
  $scope.hideLogin = !!temp;
  $scope.close = () => {
    $scope.hideLogin = true;
    sessionStorage.setItem('hideLogin', 'true');
  }

  $scope.logout = () => {
    sessionStorage.removeItem('loginFlag');
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
      }, response => {
        if (response.status === 401) {
          // TODO: msg erro de login
        }
      });
  }
})
