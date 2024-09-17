
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { Card } from 'react-bootstrap';
// // import CustomAlert from 'components/utilities/Alert';

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card } from 'react-bootstrap';
// import CustomAlert from 'components/utilities/Alert';

// const Settings = ({ token }) => {
//   const [settings, setSettings] = useState({
//     minDeliveryCharge: 0,
//     taxAmount: 0,
//     deliveryChargePerkm: 0,
//     deliverykm: 0,
//     restaurantId: '',
//     restaurantBranch: ''
//   });
//   const [alert, setAlert] = useState({ message: '', type: '' });
//   const [restaurants, setRestaurants] = useState([]);
//   const [isExisting, setIsExisting] = useState(false); // Flag to check if settings already exist

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await axios.get('/api/restaurant/get');
//         setRestaurants(response.data.data);
//       } catch (error) {
//         console.log('Error fetching restaurants');
//       }
//     };

//     const fetchSettings = async () => {
//       try {
//         const response = await axios.get('/api/admin/settings/get', {
//           headers: { 'x-auth-token': token }
//         });
//         if (response.data.data) {
//           const { minDeliveryCharge, taxAmount, deliveryChargePerkm, deliverykm, restaurantId, restaurantBranch } = response.data.data;
//           setSettings({ minDeliveryCharge, taxAmount, deliveryChargePerkm, deliverykm, restaurantId, restaurantBranch });
//           setIsExisting(true); // Settings already exist
//         }
//       } catch (error) {
//         console.error('Fetch settings error', error);
//       }
//     };

//     fetchRestaurants();
//     fetchSettings();
//   }, [token]);

//   const handleRestaurantChange = (e) => {
//     const selectedRestaurantId = e.target.value;
//     console.log('Selected Restaurant ID:', selectedRestaurantId); // Debugging
    
//     // Check if restaurants array is populated correctly
//     console.log('Restaurants Array:', restaurants); // Debugging
  
//     const selectedRestaurant = restaurants.find(r => r.restaurantId === parseInt(selectedRestaurantId)); // Use parseInt if necessary
//     console.log('Selected Restaurant:', selectedRestaurant); // Debugging
  
//     setSettings(prevSettings => ({
//       ...prevSettings,
//       restaurantId: selectedRestaurantId,
//       restaurantBranch: selectedRestaurant ? selectedRestaurant.restaurantBranch : '' // Default to empty string if not found
//     }));
//   };
  
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put('/api/admin/settings/update', {
//         ...settings,
//         isExisting // Send a flag to indicate whether the settings exist
//       }, {
//         headers: { 'x-auth-token': token }
//       });

//       if (response.data.message === 'Settings created successfully' || response.data.message === 'Settings updated successfully') {
//         setAlert({ message: response.data.message, type: 'success' });
//       }
//     } catch (error) {
//       setAlert({ message: 'Error saving settings', type: 'error' });
//       console.error('Error saving settings', error);
//     }
//   };

//   const handleCloseAlert = () => {
//     setAlert({ message: '', type: '' });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSettings(prevSettings => ({
//       ...prevSettings,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="bg-white py-5 d-flex justify-content-center align-items-center text-black">
//       <Card className='p-4 col-xl-4 col-xs-12 col-sm-12 col-lg-6 col-md-8 Cardimg123'>
//         <h2>Tax & Delivery Charges</h2>
//         {alert.message && (
//           <CustomAlert message={alert.message} type={alert.type} onClose={handleCloseAlert} />
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <select 
//               name="restaurantId"
//               value={settings.restaurantId}
//               onChange={handleRestaurantChange}
//               className="form-select"
//             >
//               <option value="">Select Restaurant</option>
//               {restaurants.map((restaurant) => (
//                 <option key={restaurant._id} value={restaurant.restaurantId}>
//                   {restaurant.restaurantBranch}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="minDeliveryCharge" className="form-label">Minimum Delivery Charges</label>
//             <input 
//               type="number" 
//               className="form-control" 
//               name="minDeliveryCharge" 
//               value={settings.minDeliveryCharge} 
//               onChange={handleChange} 
//               placeholder="Min Delivery Charge" 
//               required 
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="taxAmount" className="form-label">Tax Amount</label>
//             <input 
//               type="number" 
//               className="form-control" 
//               name="taxAmount" 
//               value={settings.taxAmount} 
//               onChange={handleChange} 
//               placeholder="Tax Amount" 
//               required 
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="deliveryChargePerkm" className="form-label">Delivery Charges per km</label>
//             <input 
//               type="number" 
//               className="form-control" 
//               name="deliveryChargePerkm" 
//               value={settings.deliveryChargePerkm} 
//               onChange={handleChange} 
//               placeholder="Delivery Charge Per km" 
//               required 
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="deliverykm" className="form-label">Delivery km</label>
//             <input 
//               type="number" 
//               className="form-control" 
//               name="deliverykm" 
//               value={settings.deliverykm} 
//               onChange={handleChange} 
//               placeholder="Delivery km" 
//             />
//           </div>
//           <button className='btn my-3 px-4 btn rounded w-100' type="submit">Save</button>
//         </form>
//       </Card>
//     </div>
//   );
// }

// export default Settings;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import CustomAlert from 'components/utilities/Alert';

const Settings = ({ token }) => {
  const [settings, setSettings] = useState({
    minDeliveryCharge: '',
    taxAmount: '',
    deliveryChargePerkm: '',
    deliverykm: '',
    restaurantId: '',
    restaurantBranch: ''
  });
  const [settingsList, setSettingsList] = useState([]);
  const [alert, setAlert] = useState({ message: '', type: '' });
  const [restaurants, setRestaurants] = useState([]);
  const [isExisting, setIsExisting] = useState(false); // Flag to check if settings already exist

  const fetchSettings = async () => {
    try {
      const response = await axios.get('/api/admin/settings/get', {
        headers: { 'x-auth-token': token }
      });
      if (response.data.data) {
        setSettingsList(response.data.data);
        if (response.data.data.length > 0) {
          const { minDeliveryCharge, taxAmount, deliveryChargePerkm, deliverykm, restaurantId, restaurantBranch } = response.data.data[0];
          setSettings({restaurantId, restaurantBranch });
          setIsExisting(true); // Settings already exist
        }
      }
    } catch (error) {
      console.error('Fetch settings error', error);
    }
  };
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('/api/restaurant/get');
        setRestaurants(response.data.data);
      } catch (error) {
        console.log('Error fetching restaurants');
      }
    };


    fetchRestaurants();
    fetchSettings();
  }, [token]);

  const handleRestaurantChange = (e) => {
    const selectedRestaurantId = e.target.value;
    const selectedRestaurant = restaurants.find(r => r.restaurantId === parseInt(selectedRestaurantId));
    setSettings(prevSettings => ({
      ...prevSettings,
      restaurantId: selectedRestaurantId,
      restaurantBranch: selectedRestaurant ? selectedRestaurant.restaurantBranch : '' // Default to empty string if not found
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/settings/update', {
        ...settings,
        isExisting // Send a flag to indicate whether the settings exist
      }, {
        headers: { 'x-auth-token': token }
      });

      if (response.data.message === 'Settings created successfully' || response.data.message === 'Settings updated successfully') {
        setAlert({ message: response.data.message, type: 'success' });
        // Refresh the settings list after update
        setSettings({
          minDeliveryCharge: '',
          taxAmount: '',
          deliveryChargePerkm: '',
          deliverykm: '',
          restaurantId: '',
          restaurantBranch: ''
        })
      }
      fetchSettings()
    } catch (error) {
      setAlert({ message: 'Error saving settings', type: 'error' });
      console.error('Error saving settings', error);
    }
  };

  const handleCloseAlert = () => {
    setAlert({ message: '', type: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: value
    }));
  };

  return (
    <div className="bg-white py-5 d-flex justify-content-center align-items-center text-black">
      <Card className='p-4 col-xl-10 col-xs-12 col-sm-12 col-lg-12 col-md-12 Cardimg123'>
        <h2>Tax & Delivery Charges</h2>
        {alert.message && (
          <CustomAlert message={alert.message} type={alert.type} onClose={handleCloseAlert} />
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <select 
              name="restaurantId"
              value={settings.restaurantId}
              onChange={handleRestaurantChange}
              className="form-select"
            >
              <option value="">Select Restaurant</option>
              {restaurants.map((restaurant) => (
                <option key={restaurant._id} value={restaurant.restaurantId}>
                  {restaurant.restaurantBranch}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="minDeliveryCharge" className="form-label">Minimum Delivery Charges</label>
            <input 
              type="number" 
              className="form-control" 
              name="minDeliveryCharge" 
              value={settings.minDeliveryCharge} 
              onChange={(e) => {
                const value = e.target.value;
                if (value >= 0) { 
                  handleChange(e);
                }
              }}
              placeholder="Min Delivery Charge" 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="taxAmount" className="form-label">Tax Amount</label>
            <input 
              type="number" 
              className="form-control" 
              name="taxAmount" 
              value={settings.taxAmount} 
              onChange={(e) => {
                const value = e.target.value;
                if (value >= 0) { 
                  handleChange(e);
                }
              }}
              placeholder="Tax Amount" 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="deliveryChargePerkm" className="form-label">Delivery Charges per km</label>
            <input 
              type="number" 
              className="form-control" 
              name="deliveryChargePerkm" 
              value={settings.deliveryChargePerkm} 
              onChange={(e) => {
                const value = e.target.value;
                if (value >= 0) { 
                  handleChange(e);
                }
              }}
              placeholder="Delivery Charge Per km" 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="deliverykm" className="form-label">Delivery km</label>
            <input 
              type="number" 
              className="form-control" 
              name="deliverykm" 
              value={settings.deliverykm} 
              onChange={(e) => {
                const value = e.target.value;
                if (value >= 0) { 
                  handleChange(e);
                }
              }}
              placeholder="Delivery km" 
            />
          </div>
          <button className='btn my-3 px-4 btn rounded w-100' type="submit">Save</button>
        </form>
        
        <h3 className="mt-4">All data</h3>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Restaurant ID</th>
              <th>Restaurant Branch</th>
              <th>Min Delivery Charge</th>
              <th>Tax Amount</th>
              <th>Delivery Charge Per km</th>
              <th>Delivery km</th>
            </tr>
          </thead>
          <tbody>
            {settingsList.map((setting, index) => (
              <tr key={index}>
                <td>{setting.restaurantId}</td>
                <td>{setting.restaurantBranch || 'N/A'}</td>
                <td>{setting.minDeliveryCharge}</td>
                <td>{setting.taxAmount}</td>
                <td>{setting.deliveryChargePerkm}</td>
                <td>{setting.deliverykm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default Settings;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card } from 'react-bootstrap';
// import CustomAlert from 'components/utilities/Alert';

// const Settings = ({ token }) => {
//   const [settingsList, setSettingsList] = useState([]);
//   const [selectedSettings, setSelectedSettings] = useState({
//     minDeliveryCharge: 0,
//     taxAmount: 0,
//     deliveryChargePerkm: 0,
//     deliverykm: 0,
//     restaurantId: '',
//     restaurantBranch: ''
//   });
//   const [alert, setAlert] = useState({ message: '', type: '' });
//   const [restaurants, setRestaurants] = useState([]);
//   const [isExisting, setIsExisting] = useState(false); // Flag to check if settings already exist

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await axios.get('/api/restaurant/get');
//         setRestaurants(response.data.data);
//       } catch (error) {
//         console.log('Error fetching restaurants');
//       }
//     };

//     const fetchSettings = async () => {
//       try {
//         const response = await axios.get('/api/admin/settings/get', {
//           headers: { 'x-auth-token': token }
//         });
//         if (response.data.data && response.data.data.length > 0) {
//           setSettingsList(response.data.data);
//           const { minDeliveryCharge, taxAmount, deliveryChargePerkm, deliverykm, restaurantId, restaurantBranch } = response.data.data[0];
//           setSelectedSettings({ minDeliveryCharge, taxAmount, deliveryChargePerkm, deliverykm, restaurantId, restaurantBranch });
//           setIsExisting(true); // Settings already exist
//         }
//       } catch (error) {
//         console.error('Fetch settings error', error);
//       }
//     };

//     fetchRestaurants();
//     fetchSettings();
//   }, [token]);

//   const handleRestaurantChange = (e) => {
//     const selectedRestaurantId = e.target.value;
//     const selectedRestaurant = restaurants.find(r => r.restaurantId === parseInt(selectedRestaurantId));
    

//     setSelectedSettings(prevSettings => ({
//       // ...prevSettings,
//       minDeliveryCharge: 0,
//     taxAmount: 0,
//     deliveryChargePerkm: 0,
//     deliverykm: 0,
//       restaurantId: selectedRestaurantId,
//       restaurantBranch: selectedRestaurant ? selectedRestaurant.restaurantBranch : '' // Default to empty string if not found
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put('/api/admin/settings/update', {
//         ...selectedSettings,
//         isExisting // Send a flag to indicate whether the settings exist
//       }, {
//         headers: { 'x-auth-token': token }
//       });

//       if (response.data.message === 'Settings created successfully' || response.data.message === 'Settings updated successfully') {
//         setAlert({ message: response.data.message, type: 'success' });
//         fetchSettings(); // Refresh the settings list after update
//       }
//     } catch (error) {
//       setAlert({ message: 'Error saving settings', type: 'error' });
//       fetchSettings();
//       console.error('Error saving settings', error);
//     }
//   };

//   const handleCloseAlert = () => {
//     setAlert({ message: '', type: '' });
//     fetchSettings()
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSelectedSettings(prevSettings => ({
//       ...prevSettings,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="bg-white py-5 d-flex justify-content-center align-items-center text-black">
//       <Card className='p-4 col-xl-8 col-xs-12 col-sm-12 col-lg-12 col-md-12 Cardimg123'>
//         <h2>Tax & Delivery Charges</h2>
//         {alert.message && (
//           <CustomAlert message={alert.message} type={alert.type} onClose={handleCloseAlert} />
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <select 
//               name="restaurantId"
//               value={selectedSettings.restaurantId}
//               onChange={handleRestaurantChange}
//               className="form-select"
//             >
//               <option value="">Select Restaurant</option>
//               {restaurants.map((restaurant) => (
//                 <option key={restaurant._id} value={restaurant.restaurantId}>
//                   {restaurant.restaurantBranch}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="minDeliveryCharge" className="form-label">Minimum Delivery Charges</label>
//             <input 
//               type="number" 
//               className="form-control" 
//               name="minDeliveryCharge" 
//               value={selectedSettings.minDeliveryCharge} 
//               onChange={handleChange} 
//               placeholder="Min Delivery Charge" 
//               required 
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="taxAmount" className="form-label">Tax Amount</label>
//             <input 
//               type="number" 
//               className="form-control" 
//               name="taxAmount" 
//               value={selectedSettings.taxAmount} 
//               onChange={handleChange} 
//               placeholder="Tax Amount" 
//               required 
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="deliveryChargePerkm" className="form-label">Delivery Charges per km</label>
//             <input 
//               type="number" 
//               className="form-control" 
//               name="deliveryChargePerkm" 
//               value={selectedSettings.deliveryChargePerkm} 
//               onChange={handleChange} 
//               placeholder="Delivery Charge Per km" 
//               required 
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="deliverykm" className="form-label">Delivery km</label>
//             <input 
//               type="number" 
//               className="form-control" 
//               name="deliverykm" 
//               value={selectedSettings.deliverykm} 
//               onChange={handleChange} 
//               placeholder="Delivery km" 
//             />
//           </div>
//           <button className='btn my-3 px-4 btn rounded w-100' type="submit">Save</button>
//         </form>
//         <h3 className="mt-4">All Settings</h3>
//         <table className="table mt-3">
//           <thead>
//             <tr>
//               <th>Restaurant ID</th>
//               <th>Restaurant Branch</th>
//               <th>Min Delivery Charge</th>
//               <th>Tax Amount</th>
//               <th>Delivery Charge Per km</th>
//               <th>Delivery km</th>
//             </tr>
//           </thead>
//           <tbody>
//             {settingsList.map((setting, index) => (
//               <tr key={index}>
//                 <td>{setting.restaurantId}</td>
//                 <td>{setting.restaurantBranch || 'N/A'}</td>
//                 <td>{setting.minDeliveryCharge}</td>
//                 <td>{setting.taxAmount}</td>
//                 <td>{setting.deliveryChargePerkm}</td>
//                 <td>{setting.deliverykm}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Card>
//     </div>
//   );
// }

// export default Settings;
