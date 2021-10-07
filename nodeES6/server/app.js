import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
// import indexRouter from './routes/index';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json';
// import swaggerDocument from '../swagger.json';
import apiRouter from './apiRouter';


const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
// app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

export default app;
