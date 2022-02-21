import express from 'express';
import AuthorRoutes from './AuthorRoutes';
import UserRoutes from './UserRoutes';
import BookRoutes from './BookRoutes';

const routes = express.Router();

/** Users */
routes.use(UserRoutes);
/** Authors */
routes.use(AuthorRoutes);
/** Books */
routes.use(BookRoutes);

export default routes;
