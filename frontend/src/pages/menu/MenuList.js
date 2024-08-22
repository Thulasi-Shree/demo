// /* eslint-disable no-alert */
// /* eslint-disable no-shadow */
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import axios from 'axios';
// import ReusableTable from '../../components/ReusableTable';
// import './index.css';
// import CustomAlert from 'components/utilities/Alert';
// import { Modal } from 'react-bootstrap';

// const MenuList = () => {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem('user'));
//   const { restaurantId } = user;
//   const { role } = user;
//   const [menuData, setMenuData] = useState([]);
//   const [restaurant, setRestaurant] = useState([]);
//   const [alert, setAlert] = useState({ message: '', type: '' });
//   const [selectedBranch, setSelectedBranch] = useState(restaurantId || 'all');
//   const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
//   const [selectedMenuId, setSelectedMenuId] = useState(null);

//   const handleBranchChange = (e) => {
//     setSelectedBranch(e.target.value);
//   };

//   const fetchOrders = async () => {
//     try {
//       let response;

//       if (selectedBranch === 'all') {
//         response = await axios.get('/api/admin/products');
//       } else {
//         const restaurantId = { restaurantId: selectedBranch };
//         response = await axios.post('/api/admin/products/branch', restaurantId);
//       }

//       const menus = Array.isArray(response.data)
//         ? response.data
//         : response.data.data;

//       setMenuData(menus || []);
//     } catch (error) {
//       console.error('Error fetching menus:', error);
//     }
//   };

//   const handleShowDeleteConfirmModal = (menuId) => {
//     setSelectedMenuId(menuId);
//     setShowDeleteConfirmModal(true);
//   };

//   const handleCloseDeleteConfirmModal = () => {
//     setShowDeleteConfirmModal(false);
//     setSelectedMenuId(null);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, [selectedBranch]);

//   const handleAdd = () => {
//     navigate('/admin/createMenu');
//   };

//   const handleEdit = (menuId) => {
//     navigate(`/admin/updateMenu/${menuId}`);
//   };

//   const handleCloseAlert = () => {
//     setAlert({ message: '', type: '' });
//   };

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await axios.get('/api/restaurant/get');
//         const restaurant = response.data.data;
//         setRestaurant(restaurant);
//       } catch (error) {
//         console.error('Error fetching time slots:', error.message);
//       }
//     };

//     fetchRestaurants();
//   }, []);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`/api/admin/product/${selectedMenuId}`);
//       fetchOrders();
//       setAlert({ message: 'Product Deleted Successfully!', type: 'success' });
//       handleCloseDeleteConfirmModal(); // Close modal after deletion
//     } catch (error) {
//       setAlert({ message: error.message || 'An error occurred', type: 'error' });
//     }
//   };

//   const headers = [
//     'Sl No',
//     'Menu Name',
//     'Price',
//     'Category',
//     'Restaurant Branch'
//   ];

//   return (
//     <div className="bg-white">
//       <div className="col-11 mx-auto">
//         <div className="row">
//           <div className="col">
//             <h3 className="text-center text-black mt-3">MENUS</h3>
//             <div className="d-flex justify-content-end ">
//               <Button
//                 className="btn my-3 px-4 btn rounded"
//                 id="CardText"
//                 onClick={handleAdd}
//               >
//                 Add Menu
//               </Button>
//             </div>
//             <div className="col-12 col-lg-3 ">
//               <div className="form-group">
//                 {role !== 'admin' && (
//                   <div className="form-group">
//                     <h4 className="mt-lg-n5" id="CardText">
//                       Select branch
//                     </h4>
//                     <select
//                       className="form-control"
//                       name="status"
//                       value={selectedBranch}
//                       onChange={handleBranchChange}
//                     >
//                       <option value="all">All</option>
//                       {restaurant &&
//                         restaurant.map((restaurant) => (
//                           <option
//                             key={restaurant._id}
//                             value={restaurant.restaurantId}
//                           >
//                             {restaurant.restaurantBranch} 
//                           </option>
//                         ))}
//                     </select>
//                   </div>
//                 )}
//               </div>
//             </div>
//             {alert.message && (
//               <CustomAlert message={alert.message} type={alert.type} onClose={handleCloseAlert} />
//             )}
//             <ReusableTable
//               headers={headers}
//               data={menuData}
//               onEdit={handleEdit}
//               onDelete={handleShowDeleteConfirmModal} // Trigger the modal
//             />
//           </div>
//         </div>
//       </div>
//       {/* Delete Confirmation Modal */}
//       <Modal show={showDeleteConfirmModal} onHide={handleCloseDeleteConfirmModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Delete</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to delete this menu item?
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseDeleteConfirmModal}>
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={handleDelete}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default MenuList;
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import ReusableTable from '../../components/ReusableTable';
import './index.css';
import CustomAlert from 'components/utilities/Alert';
import { Modal } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const MenuList = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const { restaurantId } = user;
  const { role } = user;
  const [menuData, setMenuData] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [alert, setAlert] = useState({ message: '', type: '' });
  const [selectedBranch, setSelectedBranch] = useState(restaurantId || 'all');
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const pageSize = 100;

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
    setCurrentPage(0); // Reset to the first page when branch is changed
  };

  const fetchOrders = async (page = 1) => {
    try {
      let response;

      if (selectedBranch === 'all') {
        response = await axios.get('/api/admin/products', {
          params: {
            page,
            pageSize,
          },
        });
      } else {
        const restaurantId = { restaurantId: selectedBranch };
        response = await axios.post('/api/admin/products/branch', restaurantId, {
          params: {
            page,
            pageSize,
          },
        });
      }

      const menus = Array.isArray(response.data)
        ? response.data
        : response.data.data;

      const totalItems = response.headers['x-total-count'];
      const totalPages = Math.ceil(totalItems / pageSize);

      setMenuData(menus || []);
      setTotalPages(totalPages);
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage - 1);
    fetchOrders(selectedPage);
  };

  const handleShowDeleteConfirmModal = (menuId) => {
    setSelectedMenuId(menuId);
    setShowDeleteConfirmModal(true);
  };

  const handleCloseDeleteConfirmModal = () => {
    setShowDeleteConfirmModal(false);
    setSelectedMenuId(null);
  };

  useEffect(() => {
    fetchOrders(currentPage + 1);
  }, [selectedBranch]);

  const handleAdd = () => {
    navigate('/admin/createMenu');
  };

  const handleEdit = (menuId) => {
    navigate(`/admin/updateMenu/${menuId}`);
  };

  const handleCloseAlert = () => {
    setAlert({ message: '', type: '' });
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('/api/restaurant/get');
        const restaurant = response.data.data;
        setRestaurant(restaurant);
      } catch (error) {
        console.error('Error fetching time slots:', error.message);
      }
    };

    fetchRestaurants();
  }, []);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/admin/product/${selectedMenuId}`);
      fetchOrders(currentPage + 1);
      setAlert({ message: 'Product Deleted Successfully!', type: 'success' });
      handleCloseDeleteConfirmModal(); // Close modal after deletion
    } catch (error) {
      setAlert({ message: error.message || 'An error occurred', type: 'error' });
    }
  };

  const headers = [
    'Sl No',
    'Menu Name',
    'Price',
    'Category',
    'Restaurant Branch'
  ];

  return (
    <div className="bg-white">
      <div className="col-11 mx-auto">
        <div className="row">
          <div className="col">
            <h3 className="text-center text-black mt-3">MENUS</h3>
            <div className="d-flex justify-content-end ">
              <Button
                className="btn my-3 px-4 btn rounded"
                id="CardText"
                onClick={handleAdd}
              >
                Add Menu
              </Button>
            </div>
            <div className="col-12 col-lg-3 ">
              <div className="form-group">
                {role !== 'admin' && (
                  <div className="form-group">
                    <h4 className="mt-lg-n5" id="CardText">
                      Select branch
                    </h4>
                    <select
                      className="form-select"
                      name="status"
                      value={selectedBranch}
                      onChange={handleBranchChange}
                    >
                      <option value="all">All</option>
                      {restaurant &&
                        restaurant.map((restaurant) => (
                          <option
                            key={restaurant._id}
                            value={restaurant.restaurantId}
                          >
                            {restaurant.restaurantBranch} 
                          </option>
                        ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
            {alert.message && (
              <CustomAlert message={alert.message} type={alert.type} onClose={handleCloseAlert} />
            )}
            <ReusableTable
              headers={headers}
              data={menuData}
              onEdit={handleEdit}
              onDelete={handleShowDeleteConfirmModal} // Trigger the modal
            />
            {/* Pagination */}
            <ReactPaginate
              // className={'bg-white'}
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={totalPages}
              marginPagesDisplayed={1}
              pageRangeDisplayed={1}
              onPageChange={handlePageClick}
              containerClassName={'pagination bg-white'}
              activeClassName={'active'}
            />
          </div>
        </div>
      </div>
      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteConfirmModal} onHide={handleCloseDeleteConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this menu item?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteConfirmModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MenuList;
