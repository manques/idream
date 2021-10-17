import express from 'express';
import { sidebarMenuList, sidebarMenuListUpdate } from '../controller/dashboard.controller/sidebar.mjs';
const router = express.Router();
import { 
    pageView,
} from '../controller/user.controller/user.controller.mjs';

router.get('/documents', (req, res, next) => pageView({ name: 'documents', data: {
    title: 'Documents', menus: sidebarMenuList
}}, res, next));

    
export default router;