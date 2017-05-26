var TaskController = require('./controllers/taskController')

var taskController = new TaskController();

module.exports = function (app) {
    app.route("/tasks")
    .get(taskController.findAll)
    .post(taskController.add)
    .put(taskController.update)
    .delete(taskController.delete);
}