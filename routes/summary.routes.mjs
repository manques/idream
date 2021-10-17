import express from 'express';
import { sidebarMenuList, sidebarMenuListUpdate } from '../controller/dashboard.controller/sidebar.mjs';
const router = express.Router();
import { 
    pageView,
} from '../controller/user.controller/user.controller.mjs';

router.get('/summary', (req, res, next) => pageView({ name: 'summary', data: {
    title: 'Summary', menus: sidebarMenuList
}}, res, next));

    
export default router;