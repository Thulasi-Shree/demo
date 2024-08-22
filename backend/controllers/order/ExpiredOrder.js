const catchAsyncError = require('../../middlewares/catchAsyncError');
const Order = require('../../model/order');
const ErrorHandler = require('../../utils/errorHandler');

// Route to get non-active orders (other than 'Delivered')
const getExpiredOrders1 = catchAsyncError(async (req, res, next) => {
    try {
      const { startDate, endDate, orderType, page = 1, pageSize = 100 } = req.query;
  
      const start = new Date(startDate);
      const end = new Date(endDate);
  
      const query = {
        orderDate: { $gte: start, $lte: end },
        orderType: orderType,
        orderStatus: { $ne: 'Delivered' } // Exclude orders with status 'Delivered'
      };
  
      const totalOrders = await Order.countDocuments(query);
      const totalPrice = await Order.aggregate([
        { $match: query },
        { $group: { _id: null, total: { $sum: "$totalAmount" } } }
      ]);
  
      const nonActiveOrders = await Order.find(query)
        .skip((page - 1) * pageSize)
        .limit(parseInt(pageSize))
        .populate('restaurantId', 'restaurantBranch address');
  
      res.json({
        nonActiveOrders,
        totalOrders,
        totalPrice: totalPrice[0] ? totalPrice[0].total : 0,
        totalPages: Math.ceil(totalOrders / pageSize)
      });
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  // Route to get non-active orders for a specific restaurant
  const getExpiredOrdersByBranch1 = catchAsyncError(async (req, res, next) => {
    try {
      const { restaurantId } = req.body;
      const { startDate, endDate, orderType, page = 1, pageSize = 100 } = req.query;
  
      const start = new Date(startDate);
      const end = new Date(endDate);
  
      const query = {
        orderDate: { $gte: start, $lte: end },
        orderType: orderType,
        restaurantId: restaurantId,
        orderStatus: { $ne: 'Delivered' } // Exclude orders with status 'Delivered'
      };
  
      const totalOrders = await Order.countDocuments(query);
      const totalPrice = await Order.aggregate([
        { $match: query },
        { $group: { _id: null, total: { $sum: "$totalAmount" } } }
      ]);
  
      const nonActiveOrders = await Order.find(query)
        .skip((page - 1) * pageSize)
        .limit(parseInt(pageSize))
        .populate('restaurantId', 'restaurantBranch address');
  
      res.json({
        nonActiveOrders,
        totalOrders,
        totalPrice: totalPrice[0] ? totalPrice[0].total : 0,
        totalPages: Math.ceil(totalOrders / pageSize)
      });
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  
module.exports = {
    getExpiredOrders1,
    getExpiredOrdersByBranch1
};