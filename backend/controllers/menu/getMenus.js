const Menu = require('../../model/menuItem');
const catchAsyncError = require('../../middlewares/catchAsyncError');
const APIFeatures = require('../../utils/apiFeatures');
const ErrorHandler = require('../../utils/errorHandler');
const SuccessHandler = require('../../utils/successHandler');

exports.getMenus = catchAsyncError(async (req, res, next) => {
    const resPerPage = 100;
  
    try {
      const filteredMenusCount = await new APIFeatures(Menu.find(), req.query)
        .search()
        .filter()
        .sort()
        .paginate(resPerPage)
        .query.countDocuments({});
      
      const totalMenusCount = await Menu.countDocuments({});
      const menusCount = (filteredMenusCount !== totalMenusCount) ? filteredMenusCount : totalMenusCount;
  
      const Menus = await new APIFeatures(Menu.find(), req.query)
        .search()
        .filter()
        .sort()
        .paginate(resPerPage)
        .query.sort({ isAvailable: -1, mealTypeCategory: 1});
  
      if (!Menus || Menus.length === 0) {
        res.status(200).json({
          success: true,
          count: menusCount,
          resPerPage,
          Menus,
          message: 'no menus found'
        });
      }
  
      res.status(200).json({
        success: true,
        count: menusCount,
        resPerPage,
        Menus
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  });

// exports.getAdminMenusByBranch = catchAsyncError(async (req, res, next) => {
//   const { page = 1, pageSize = 100 } = req.query;
//     try {
//       const totalItems = await Menu.countDocuments();
//         const restaurantId = req.body.restaurantId;
        
//         const skip = (page - 1) * pageSize;
//         const menus = await Menu.find({  
//           restaurantId: restaurantId
//       }).skip(skip).limit(parseInt(pageSize));

//         res.set('X-Total-Count', totalItems.toString());
       
//         const successHandler = new SuccessHandler('Menus fetched successfully', menus);
//         successHandler.sendResponse(res, 200);
//     } catch (error) {
//         console.error(error);
//         next(new ErrorHandler(error.message, 500));
//     }
// });
// exports.getAdminMenusByBranch = catchAsyncError(async (req, res, next) => {
//   const { page = 1, pageSize = 100 } = req.query;
//   try {
//     const restaurantId = req.body.restaurantId || req.query.restaurantId;

//     console.log('Restaurant ID:', restaurantId);
//     const totalItems = await Menu.countDocuments({ restaurantId });
//     console.log('Total Items:', totalItems);

//       const skip = (page - 1) * pageSize; // Calculate number of items to skip
      
//       const menus = await Menu.find({ restaurantId })
//           .skip(skip)
//           .limit(parseInt(pageSize)); // Get menu items for the current page
//           const totalPages = Math.ceil(totalItems / pageSize); // Calculate total pages

//       res.set('X-Total-Count', totalItems.toString()); // Set total items in header
//       res.set('X-Total-Pages', totalPages.toString()); // Set total pages in header

//       // Send paginated response
//       res.status(200).json({
//           success: true,
//           page: parseInt(page),
//           pageSize: parseInt(pageSize),
//           totalItems,
//           totalPages,
//           menus
//       });
//   } catch (error) {
//       console.error(error);
//       next(new ErrorHandler(error.message, 500));
//   }
// });

exports.getAdminMenusByBranch = async (req, res, next) => {
  console.log('getAdminMenusByBranch called');

  const { page = 1, pageSize = 100 } = req.query;
  const restaurantId = req.body.restaurantId || req.query.restaurantId;

  console.log('Restaurant ID:', restaurantId);

  try {
    const totalItems = await Menu.countDocuments({ restaurantId });
    console.log('Total Items:', totalItems);

    const skip = (page - 1) * pageSize;
    const menus = await Menu.find({ restaurantId })
      .skip(skip)
      .limit(parseInt(pageSize));

    res.set('X-Total-Count', totalItems.toString());

    const successHandler = new SuccessHandler('Menus fetched successfully', menus);
    successHandler.sendResponse(res, 200);
  } catch (error) {
    console.error(error);
    next(new ErrorHandler(error.message, 500));
  }
};
