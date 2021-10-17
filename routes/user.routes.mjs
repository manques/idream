import express from 'express';
const router = express.Router();

import { 
    createUser, 
    getUser,  
    getUsers,
    updateUser,
    deleteUser,
    pageView,
} from '../controller/user.controller/user.controller.mjs';
router.get('/', (req, res, next) => pageView({ name: 'index', data: {title: 'Login'}}, res, next));
router.get('/register', (req, res, next) => pageView({ name: 'register', data: {title: 'Register'}}, res, next));
router.get('/forgot-password', (req, res, next) => pageView({ name: 'forgot-password', data: {title: 'Forgot Password'}}, res, next));
// router.post('/login', createUser);
router.post('/register', createUser);
// router.post('/forgot-password', createUser);
// router.route('/user/:id')
//       .get(getUser)
//       .put(updateUser)
//       .delete(deleteUser);

router.get('/users', getUsers);
    
export default router;