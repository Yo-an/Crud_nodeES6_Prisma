//import
import express from 'express';
import users from './routes/user/indexUserRoute'

//Router
var apiRouter = express.Router();

//User routes
apiRouter.route('/user/list/').get(users.listUser);
apiRouter.route('/user/get/').post(users.getUser);
apiRouter.route('/user/post/').post(users.addUser);
apiRouter.route('/user/put/').put(users.updateUser);
apiRouter.route('/user/delete/').delete(users.deleteUser);

export default apiRouter;
