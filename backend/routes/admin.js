const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin/index');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/authenticate');

// Get All Users for Admin: GET /api/admin/users
router.get('/admin/users/get', authorizeRoles('superAdmin'), adminController.getAllUsers );
  

// Get All Users for Admin: GET /api/admin/users
router.get('/admin/search/users', isAuthenticatedUser, authorizeRoles( 'superAdmin'), adminController.searchUser, );

// Get All Users for Admin: GET /api/admin/admins
router.get('/admin/admins',  isAuthenticatedUser, authorizeRoles('superAdmin'), adminController.getAllAdmins);

// Get User by ID for Admin: GET /api/admin/user/:id
router.get('/admin/user/:id',  isAuthenticatedUser, authorizeRoles('Admin', 'superAdmin'), adminController.getUser);

// Update User by ID for Admin: PUT /api/admin/user/:id
router.put('/admin/user/:id',  adminController.updateUser);

// Delete User by ID for Admin: DELETE /api/admin/user/:id
router.delete('/admin/user/:id', adminController.deleteUser);


module.exports = router;
