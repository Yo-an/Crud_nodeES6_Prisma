//import
import express from 'express';
import users from './routes/users';

//Router
var apiRouter = express.Router();

//User routes
apiRouter.route('/user/list/').get(users.getUsers);
apiRouter.route('/user/post/').post(users.addUser);
apiRouter.route('/user/put/').put(users.putUser);
apiRouter.route('/user/delete/').delete(users.deleteUser);

export default apiRouter;
