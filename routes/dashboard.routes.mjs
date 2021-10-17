import express from 'express';
import { sidebarMenuList } from '../controller/dashboard.controller/sidebar.mjs';
const router = express.Router();
import { 
    pageView,
} from '../controller/user.controller/user.controller.mjs';
import documentsRoutes from './documents.routes.mjs';
import summaryRoutes from './summary.routes.mjs';

router.get('', (req, res, next) => pageView({ name: 'dashboard', data: {
    title: 'Dashboard', menus: sidebarMenuList
}}, res, next));

router.use(documentsRoutes);
router.use(summaryRoutes);

    
export default router;