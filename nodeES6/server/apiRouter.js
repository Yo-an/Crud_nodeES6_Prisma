//import
import express from 'express';
import users from './routes/users';

//Router
var apiRouter = express.Router();

//User routes
apiRouter.route('/user/me/').get(users.getUserProfile);
apiRouter.route('/user/post/').post(users.addUser);


export default apiRouter;
