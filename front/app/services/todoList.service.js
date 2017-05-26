app.factory('todoListService', function($http) {
  return {
    getAll: _getAll
  };

  function _getAll(resolve, reject) {
    var tasks = [{
        "name": "Tarefa 1",
        "desc": "Descricao tarefa 1",
        "status": true
      },
      {
        "name": "Tarefa 2",
        "desc": "Descricao tarefa 2",
        "status": false
      },
      {
        "name": "Tarefa 3",
        "desc": "Descricao tarefa 3",
        "status": true
      }
    ];
    resolve(tasks);
  }

});
