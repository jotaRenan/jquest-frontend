 angular.module('jQuest')
 .controller('ManageDomainsCtrl', function($scope, $log, $http) {
   $scope.selectedDomain = undefined;
   $scope.updateFields = () => {
     $scope.selectedDomain = $scope.domains.find(domain => domain.id == $scope.selectedDomain.id);
   }
   $http ({
        method: 'GET',
        url: `http://localhost:8080/JQuestWebApplication/GetDomainsFullDataServlet`
    })
     .then(response => {
       $scope.domains = response.data;
     });
   $scope.deleteDomain = () => {
     //Deletes domain whose id is registered at $scope.selectedDomain;
     $http({
       method: 'POST',
       url : `http://localhost:8080/JQuestWebApplication/DeleteDomainServlet`,
       data: {id: $scope.selectedDomain.id },
     })
      .then(response => {
        $scope.msg = `Domínio removido.`;
      });
   };
   $scope.insertDomain = () => {
     $http({
       method: 'POST',
       url: `http://localhost:8080/JQuestWebApplication/CreateDomainServlet`,
       data: {name: $scope.newDomain.name, description : $scope.newDomain.description },
     })
      .then(response => {
        $scope.msg = `Domínio adicionado.`;
      }, response => {
        $scope.msg = `Impossível adicionar domínio.`;
      });
   }
   $scope.editDomain = () => {
     const payload = {id, name, description} = $scope.selectedDomain;
     $http({
       method: 'POST',
       url: `http://localhost:8080/JQuestWebApplication/UpdateDomainServlet`,
       data: {id, name, description},
     })
       .then(response => {
         $scope.msg = `Nome modificado.`;
       }, response => {
         $scope.msg = `Impossível editar nome do domínio.`;
       });
   }
 })
