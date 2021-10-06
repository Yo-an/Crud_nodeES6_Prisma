import express from 'express';
// import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
// import indexRouter from './routes/index';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import apiRouter from './apiRouter'

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../public')));
// app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
