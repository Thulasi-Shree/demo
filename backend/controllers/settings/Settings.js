const catchAsyncError = require('../../middlewares/catchAsyncError');
const Settings = require('../../model/Settings');
const SuccessHandler = require('../../utils/successHandler');
const ErrorHandler = require('../../utils/errorHandler');

// Create settings for a specific restaurant and branch
const createSetting = catchAsyncError(async (req, res, next) => {
  const { minDeliveryCharge, taxAmount, deliveryChargePerKm, deliveryKm, restaurantId, restaurantBranch } = req.body;

  try {
    // Check if the setting already exists for the given restaurant and branch
    let existingSetting = await Settings.findOne({ restaurantId, restaurantBranch });

    if (existingSetting) {
      return next(new ErrorHandler('Settings already exist for this restaurant and branch', 400));
    }

    // Create a new setting
    const newSetting = new Settings({ minDeliveryCharge, taxAmount, deliveryChargePerKm, deliveryKm, restaurantId, restaurantBranch });
    await newSetting.save();

    const successResponse = new SuccessHandler('Settings created successfully', newSetting);
    successResponse.sendResponse(res);
  } catch (error) {
    console.error(error);
    next(new ErrorHandler('Internal Server Error', 500));
  }
});

// Update settings for a specific restaurant and branch
const updateSettings = catchAsyncError(async (req, res, next) => {
  const { minDeliveryCharge, taxAmount, deliveryChargePerKm, deliveryKm, restaurantId, restaurantBranch } = req.body;

  try {
    // Check if the setting exists for the given restaurant and branch
    let settings = await Settings.findOne({ restaurantId, restaurantBranch });

    if (settings) {
      // Update the document with new values
      settings.minDeliveryCharge = minDeliveryCharge;
      settings.taxAmount = taxAmount;
      settings.deliveryChargePerKm = deliveryChargePerKm;
      settings.deliveryKm = deliveryKm;
      
      await settings.save();
      const successResponse = new SuccessHandler('Settings updated successfully', settings);
      successResponse.sendResponse(res);
    } else {
      // Create new settings if not found
      const newSetting = new Settings({ minDeliveryCharge, taxAmount, deliveryChargePerKm, deliveryKm, restaurantId, restaurantBranch });
      await newSetting.save();

      const successResponse = new SuccessHandler('Settings created successfully', newSetting);
      successResponse.sendResponse(res);
    }
  } catch (error) {
    console.error(error);
    next(new ErrorHandler('Internal Server Error', 500));
  }
});

// Get settings for a specific restaurant and branch
const getSettings = catchAsyncError(async (req, res, next) => {
  const { restaurantId } = req.query;

  try {
    const settings = await Settings.find();

    if (!settings) {
      return next(new ErrorHandler('Settings not found', 404));
    }

    const successResponse = new SuccessHandler('Settings fetched successfully', settings);
    successResponse.sendResponse(res);
  } catch (error) {
    console.error(error);
    next(new ErrorHandler('Internal Server Error', 500));
  }
});

module.exports = {
  updateSettings,
  getSettings,
  createSetting
};
