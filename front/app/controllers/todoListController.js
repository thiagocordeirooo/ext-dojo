app.controller('todoListController', function($scope, todoListService) {
  $scope.tasksList = [];
  $scope.adicionar = adicionar;
  $scope.confirmacaoDeletar = confirmacaoDeletar;

  (function() {
    todoListService.getAll(resolve => {
      $scope.tasksList = resolve;
    }, reject => {

    });
  })();

  function confirmacaoDeletar(task){
      $scope.tasksList.slice(task, 0);
  }

  function adicionar(task) {
    $scope.tasksList.push(task);
  }
});
