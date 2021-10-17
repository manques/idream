import express from 'express';
import userRoutes from './user.routes.mjs';
import dashboardRoutes from './dashboard.routes.mjs';
import projectsRoutes from './projects.routes.mjs';

const router = express.Router();

router.use(userRoutes);
router.use('/dashboard',dashboardRoutes);
router.use('/projects', projectsRoutes);

export default router;