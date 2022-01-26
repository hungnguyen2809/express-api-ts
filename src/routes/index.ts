import express from 'express';
import UserRoutes from './UserRoutes';

const routes = express.Router();

/** Users */
routes.use(UserRoutes);

export default routes;
