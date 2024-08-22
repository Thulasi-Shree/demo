const catchAsyncError = require('../../middlewares/catchAsyncError');
const Order = require('../../model/order');
const ErrorHandler = require('../../utils/errorHandler');
const SuccessHandler = require('../../utils/successHandler');

exports.checkActiveOrders = catchAsyncError(async (req, res, next) => {
    try {
        const { restaurantBranch } = req.body;

        if (!restaurantBranch) {
            return next(new ErrorHandler('Restaurant Branch is required', 400));
        }

        // Find orders that are not delivered for the specific restaurant branch
        const activeOrders = await Order.find({
            restaurantBranch: restaurantBranch,
            orderStatus: { $ne: 'Delivered' }
        }).select('orderStatus');

        if (activeOrders.length === 0) {
            return next(new ErrorHandler('No active orders found', 404));
        }

        const successResponse = new SuccessHandler('Active orders found', { activeOrders });
        successResponse.sendResponse(res);
    } catch (error) {
        console.error('Error checking active orders:', error);
        next(new ErrorHandler('Internal Server Error', 500));
    }
});

