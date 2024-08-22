
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import ReusableTable from '../../components/ReusableTable';
// import './index.css';
// import CustomAlert from 'components/utilities/Alert';

// const RestaurantTable = () => {
//   const headers = [
//     'Sl No',
//     'Restaurant Branch',
//     'Opening Hours',
//     'Restaurant Address'
//   ];
//   const navigate = useNavigate();
//   const [restaurants, setRestaurants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [alert, setAlert] = useState({ message: '', type: '' });


//   const handleAdd = () => {
//     navigate('/admin/create/restaurant');
//   };
//   const handleCloseAlert = () => {
//     setAlert({ message: '', type: '' });
//   };


//   const onEdit = (id) => {
//     // console.log(`Edit restaurant with ID ${id}`);
//     // navigate(`/admin/updateRestaurant/${id}`);
//     navigate(`/admin/updateRestaurant/${id}`);
//   };
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('/api/restaurant/get');
//       const { data } = response;

//       // Check if the response is successful and contains the expected structure
//       if (data.success && Array.isArray(data.data)) {
//         setRestaurants(data.data);
//       } else {
//         console.error('Invalid data format:', data);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onDelete = async (menuId) => {
//     try {
//       // Make an Axios DELETE request to delete the product
//       await axios.delete(`/api/restaurant/delete/${menuId}`);

//       // Handle success, e.g., navigate to another page or show a success message
//       // alert('Product Deleted Successfully!');
//       setAlert({ message: 'Product Deleted Successfully!', type: 'success' });
//       fetchData();

//       // Optionally, navigate to another page after successful deletion
//       // history.push('/some-other-page');
//     } catch (error) {
//       // Handle errors, e.g., show an error message
//       // alert(error.message || 'An error occurred');
//       setAlert({ message: error.message || 'An error occurred', type: 'error' });
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="bg-white text-black pt-4" style={{ minHeight: '58vh' }}>
//       <div className="container-fluid" id="CardText">
//         <div className="row">
//         {alert.message && (
//         <CustomAlert message={alert.message} type={alert.type} onClose={handleCloseAlert} />
//       )}
//           <h1 className=" mt-3" style={{ fontWeight: 'bold' }}>
//             Restaurants
//           </h1>
//           <div className="col bg-white">
//             {loading ? (
//               <p>Loading...</p>
//             ) : (
//               <div style={{ display: 'flex' }}>
//                 <h5 className="mt-2 text-black">Create a new restaurant - </h5>
//                 <button
//                   className="btn  px-4 btn rounded ms-2 m-1"
//                   onClick={handleAdd}
//                 >
//                   Create
//                 </button>
//               </div>
//             )}
//           </div>
//           <ReusableTable
//             headers={headers}
//             data={restaurants}
//             onEdit={onEdit}
//             onDelete={onDelete}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantTable;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReusableTable from '../../components/ReusableTable';
import './index.css';
import { Alert, Button, Modal } from 'react-bootstrap';
import CustomAlert from 'components/utilities/Alert';

const RestaurantTable = () => {
  const headers = [
    'Sl No',
    'Restaurant Branch',
    'Opening Hours',
    'Restaurant Address'
  ];
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({ message: '', type: '' });
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);

  const handleAdd = () => {
    navigate('/admin/create/restaurant');
  };

  const handleCloseAlert = () => {
    setAlert({ message: '', type: '' });
  };

  const onEdit = (id) => {
    navigate(`/admin/updateRestaurant/${id}`);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/restaurant/get');
      const { data } = response;

      if (data.success && Array.isArray(data.data)) {
        setRestaurants(data.data);
      } else {
        console.error('Invalid data format:', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleShowDeleteConfirmModal = (restaurantId) => {
    setSelectedRestaurantId(restaurantId);
    setShowDeleteConfirmModal(true);
  };

  const handleCloseDeleteConfirmModal = () => {
    setShowDeleteConfirmModal(false);
    setSelectedRestaurantId(null);
  };

  const onDelete = async () => {
    try {
      const response = await axios.delete(`/api/restaurant/delete/${selectedRestaurantId}`);
      setAlert({ message: response.data.message, type: 'success' });
      fetchData();
      handleCloseDeleteConfirmModal();
    } catch (error) {
      setAlert({ message: error.response?.data?.message || 'An error occurred', type: 'danger' });
      handleCloseDeleteConfirmModal();
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white text-black pt-4" style={{ minHeight: '58vh' }}>
      <div className="container-fluid" id="CardText">
        <div className="row">
        {alert.message && (
        <CustomAlert message={alert.message} type={alert.type} onClose={handleCloseAlert} />
      )}
          <h1 className="mt-3 uppercase" style={{ fontWeight: 'bold' }}>
            Restaurants
          </h1>
          <div className="col bg-white">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div style={{ display: 'flex' }}>
                <h5 className="mt-2 text-black">Add Restaurant - </h5>
                <Button className="ms-2 m-1" onClick={handleAdd}>
                  Add
                </Button>
              </div>
            )}
          </div>
          <ReusableTable
            headers={headers}
            data={restaurants}
            onEdit={onEdit}
            onDelete={handleShowDeleteConfirmModal}
          />
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteConfirmModal} onHide={handleCloseDeleteConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this restaurant?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteConfirmModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RestaurantTable;

// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import ReusableTable from '../../components/ReusableTable';
// import './index.css';
// import { Alert, Button, Modal } from 'react-bootstrap';
// import CustomAlert from 'components/utilities/Alert';
// import { useEffect, useState } from 'react';

// const RestaurantTable = () => {
//   const headers = [
//     'Sl No',
//     'Restaurant Branch',
//     'Opening Hours',
//     'Restaurant Address'
//   ];
//   const navigate = useNavigate();
//   const [restaurants, setRestaurants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [alert, setAlert] = useState({ message: '', type: '' });
//   const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
//   const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);

//   const handleAdd = () => {
//     navigate('/admin/create/restaurant');
//   };

//   const handleCloseAlert = () => {
//     setAlert({ message: '', type: '' });
//   };

//   const onEdit = (id) => {
//     navigate(`/admin/updateRestaurant/${id}`);
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('/api/restaurant/get');
//       const { data } = response;

//       if (data.success && Array.isArray(data.data)) {
//         setRestaurants(data.data);
//       } else {
//         console.error('Invalid data format:', data);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleShowDeleteConfirmModal = (restaurantId) => {
//     setSelectedRestaurantId(restaurantId);
//     setShowDeleteConfirmModal(true);
//   };

//   const handleCloseDeleteConfirmModal = () => {
//     setShowDeleteConfirmModal(false);
//     setSelectedRestaurantId(null);
//   };

//   const onDelete = async () => {
//     try {
//       const response = await axios.delete(`/api/restaurant/delete/${selectedRestaurantId}`);
//       setAlert({ message: 'Restaurant Deleted Successfully!', type: 'success' });
//       fetchData();
//       handleCloseDeleteConfirmModal();
//     } catch (error) {
//       // Check if the error response has a specific message for active orders
//       const errorMessage = error.response?.data?.message || 'An error occurred';
//       setAlert({ message: errorMessage, type: 'danger' });
//       handleCloseDeleteConfirmModal();
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="bg-white text-black pt-4" style={{ minHeight: '58vh' }}>
//       <div className="container-fluid" id="CardText">
//         <div className="row">
//           {alert.message && (
//             <CustomAlert message={alert.message} type={alert.type} onClose={handleCloseAlert} />
//           )}
//           <h1 className="mt-3" style={{ fontWeight: 'bold' }}>
//             Restaurants
//           </h1>
//           <div className="col bg-white">
//             {loading ? (
//               <p>Loading...</p>
//             ) : (
//               <div style={{ display: 'flex' }}>
//                 <h5 className="mt-2 text-black">Create a new restaurant - </h5>
//                 <Button className="ms-2 m-1" onClick={handleAdd}>
//                   Create
//                 </Button>
//               </div>
//             )}
//           </div>
//           <ReusableTable
//             headers={headers}
//             data={restaurants}
//             onEdit={onEdit}
//             onDelete={handleShowDeleteConfirmModal}
//           />
//         </div>
//       </div>

//       {/* Delete Confirmation Modal */}
//       <Modal show={showDeleteConfirmModal} onHide={handleCloseDeleteConfirmModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Delete</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to delete this restaurant?
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseDeleteConfirmModal}>
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={onDelete}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default RestaurantTable;
