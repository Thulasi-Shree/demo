const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settings/Settings');
const { isAuthenticatedUser } = require('../middlewares/authenticate');

// Route to create settings
router.route('/admin/settings/create').post( settingsController.createSetting);

// Route to update settings
router.route('/admin/settings/update').post( settingsController.updateSettings);

// Route to get settings
router.route('/admin/settings/get').get( settingsController.getSettings);

router.route('/admin/settings/getById').get( settingsController.getSettingsbyId);

module.exports = router;
