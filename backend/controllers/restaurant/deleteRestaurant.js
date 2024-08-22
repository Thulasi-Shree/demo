// const catchAsyncError = require('../../middlewares/catchAsyncError');
// const Restaurant = require('../../model/restaurant'); 
// const SuccessHandler = require('../../utils/successHandler');
// const ErrorHandler = require('../../utils/errorHandler');

// const deleteRestaurant = catchAsyncError(async (req, res, next) => {
//     try {
//         const restaurantId = req.params.id;

//         // Find the restaurant by ID and remove it
//         const restaurant = await Restaurant.findByIdAndDelete(restaurantId);

//         if (!restaurant) {
//             return next(new ErrorHandler(`Restaurant not found with id ${restaurantId}`, 404));
//         }

//         const successResponse = new SuccessHandler('Restaurant deleted successfully', restaurant);
//         successResponse.sendResponse(res);
//     } catch (error) {
//         console.error(error);
//         next(new ErrorHandler('Internal Server Error', 500));
//     }
// });

// module.exports = deleteRestaurant
const catchAsyncError = require('../../middlewares/catchAsyncError');
const Restaurant = require('../../model/restaurant'); 
const SuccessHandler = require('../../utils/successHandler');
const ErrorHandler = require('../../utils/errorHandler');
const Order = require('../../model/order');

// Middleware to check active orders for a restaurant branch
const checkActiveOrders = catchAsyncError(async (restaurantId) => {
    const activeOrders = await Order.find({
        restaurantId: restaurantId,
        orderStatus: { $ne: 'Delivered' }
    }).select('orderStatus');

    return activeOrders;
});

// Delete a restaurant with validation
const deleteRestaurant =  catchAsyncError(async (req, res, next) => {
    const restaurantId = req.params.id;

    try {
        // Find the restaurant to be deleted
        const restaurant = await Restaurant.findById(restaurantId);

        if (!restaurant) {
            return next(new ErrorHandler('Restaurant not found', 404));
        }

        // Check for active orders before proceeding with deletion
        const activeOrders = await checkActiveOrders(restaurant.restaurantId);

        if (activeOrders.length > 0) {
            return next(new ErrorHandler('Cannot delete restaurant: Orders exist with this branch', 400));
        }

        // Delete the restaurant if no active orders are associated
        await Restaurant.findByIdAndDelete(restaurantId);

        const successResponse = new SuccessHandler('Restaurant deleted successfully');
        successResponse.sendResponse(res);
    } catch (error) {
        console.error('Error deleting restaurant:', error);
        next(new ErrorHandler('Internal Server Error', 500));
    }
});

module.exports = deleteRestaurant;
