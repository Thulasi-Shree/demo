// const Menu = require('../../model/menuItem');
// const catchAsyncError = require('../../middlewares/catchAsyncError');
// const SuccessHandler = require('../../utils/successHandler');
// const ErrorHandler = require('../../utils/errorHandler');

// const getAdminMenus = catchAsyncError(async (req, res, next) => {
//     const { page = 1, pageSize = 100 } = req.query;
//     try {
//         const totalItems = await Menu.countDocuments();
//         const totalPages = Math.ceil(totalItems / pageSize);

//         const skip = (page - 1) * pageSize;
//         const menus = await Menu.find().skip(skip).limit(parseInt(pageSize));

//         res.set('X-Total-Count', totalItems.toString());
//         res.set('X-Total-Pages', totalPages.toString());

//         const successHandler = new SuccessHandler('Menus fetched successfully', menus);
//         successHandler.sendResponse(res, 200);
//     } catch (error) {
//         console.error(error);
//         next(new ErrorHandler(error.message, 500));
//     }
// });

// module.exports = getAdminMenus;
const Menu = require('../../model/menuItem');
const catchAsyncError = require('../../middlewares/catchAsyncError');
const SuccessHandler = require('../../utils/successHandler');
const ErrorHandler = require('../../utils/errorHandler');

const getAdminMenus = catchAsyncError(async (req, res, next) => {
    const { page = 1, pageSize = 100 } = req.query; // Default page 1, pageSize 100
    try {
        const totalItems = await Menu.countDocuments(); // Get total number of menu items
        const totalPages = Math.ceil(totalItems / pageSize); // Calculate total pages

        const skip = (page - 1) * pageSize; // Calculate number of items to skip
        const menus = await Menu.find().skip(skip).limit(parseInt(pageSize)); // Get the menu items for the current page

        res.set('X-Total-Count', totalItems.toString()); // Set total items in header
        res.set('X-Total-Pages', totalPages.toString()); // Set total pages in header

        // Send paginated response
        res.status(200).json({
            success: true,
            page: parseInt(page),
            pageSize: parseInt(pageSize),
            totalItems,
            totalPages,
            menus
        });
    } catch (error) {
        console.error(error);
        next(new ErrorHandler(error.message, 500));
    }
});

module.exports = getAdminMenus;