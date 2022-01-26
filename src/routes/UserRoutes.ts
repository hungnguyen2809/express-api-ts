import express from 'express';
import UserController from '../controllers/UserController';

const route = express.Router();

route.get('/user/all', UserController.getAll);

export default route;
