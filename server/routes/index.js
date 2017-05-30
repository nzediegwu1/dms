const usersController = require('../controllers').users;
const documentsController = require('../controllers').documents;

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.json({status: "DMS API"});
  });

  app.post("/users", usersController.createUser);
  app.get('/users', usersController.getUsers);
  app.get('/users/:id', usersController.getUser);
  app.put('/users/:id', usersController.updateUser);
  app.delete('/users/:id', usersController.deleteUser);
  app.get('/users/:id/documents', usersController.getDocuments);

  app.post("/users/login", usersController.login);
  app.post("/users/authenticate", usersController.authenticate);
  
  app.get('/search/users/', usersController.searchUser);
};