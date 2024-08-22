
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import CustomAlert from 'components/utilities/Alert';

const EditRestaurant = () => {
  const { id: restaurantId } = useParams();
  const [alert, setAlert] = useState({ message: '', type: '' });
  const [isAvailable, setIsAvailable] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    restaurantName: '',
    restaurantBranch: '',
    restaurantId: '',
    description: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postalCode: '',
      country: ''
    },
    cuisineTypeCategory: '',
    openingHours: '',
   
  });
  const handleCloseAlert = () => {
    setAlert({ message: '', type: '' });
    
  };
  const validateOpeningHours = (value) => {
    const timeRangeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9]) - ([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
    return timeRangeRegex.test(value);
  };
  useEffect(() => {
    // Fetch existing restaurant data using the ID
    const fetchRestaurantData = async () => {
      try {
        const response = await axios.get(`/api/restaurant/get/${restaurantId}`);
        const existingData = response.data.restaurant;

        setFormData({
          restaurantName: existingData.restaurantName,
          restaurantBranch: existingData.restaurantBranch,
          pincode: existingData.pincode,
          restaurantId: existingData.restaurantId,
          description: existingData.description,
          address: {
            line1: existingData.address.line1 || '',
            line2: existingData.address.line2 || '',
            city: existingData.address.city || '',
            state: existingData.address.state || '',
            postalCode: existingData.address.postalCode || '',
            country: existingData.address.country || ''
          },
          cuisineTypeCategory: existingData.cuisineTypeCategory,
          openingHours: existingData.openingHours,
          isAvailable: existingData.isAvailable
        });
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
        // Handle error (e.g., show a toast)
      }
    };

    // Call the fetchRestaurantData function
    fetchRestaurantData();
  }, [restaurantId]);
  const handleCheckboxChange = (e) => {
    setFormData({ ...formData });
  };

 const onIsAvailableChange = () => {
    setIsAvailable((prevIsAvailable) => !prevIsAvailable);
  };
  const handleChange = (e) => {
    if (e.target.name.startsWith('address.')) {
      // If the field belongs to the address, update it separately
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [e.target.name.slice(8)]: e.target.value
        }
      });
    } else {
      // Otherwise, update the form data normally
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateOpeningHours(formData.openingHours)) {
      setAlert({ message: 'Please enter a valid time range in the format HH:MM - HH:MM', type: 'success' });
      return;
    }
    try {
      await axios.put(`/api/restaurant/edit/${restaurantId}`, formData, isAvailable);
      console.log('Restaurant updated successfully!');

      // alert('Restaurant updated successfully!');
      setAlert({ message: 'Restaurant updated successfully! ', type: 'success' });
      

    } catch (error) {
      console.error('Error updating restaurant:', error);

      // alert('Error updating restaurant. Please try again.');
      setAlert({ message: 'Please provide the relevant information.', type: 'error' });

    }
  };

  return (
    <div className="bg-white text-black py-4">
      <div className="col-md-7 col-lg-5 container my-4">
       
        <form onSubmit={handleSubmit} className="address-container">
          <Card className="p-3 Cardimg123">
          <h4 className="py-3">Edit Restaurant</h4>
          {alert.message && (
        <CustomAlert message={alert.message} type={alert.type} onClose={handleCloseAlert} />
      )}
            <div className="mb-4">
              <label>
                Restaurant Name:
                <span className="text-danger">
                  {' '}
                  <b>*</b>
                </span>
              </label>
              <input
                style={{ backgroundColor: 'white', color: 'black' }}
                type="text"
                name="restaurantName"
                value={formData.restaurantName}
                onChange={handleChange}
                required
                placeholder="Field is required"
                className={`form-control `}
              />
            </div>

            <div className="mb-4">
              <label>
                Restaurant Branch:
                <span className="text-danger">
                  {' '}
                  <b>*</b>
                </span>
              </label>
              <input
                style={{ backgroundColor: 'white', color: 'black' }}
                type="text"
                name="restaurantBranch"
                value={formData.restaurantBranch}
                onChange={handleChange}
                required
                placeholder="Field is required"
                className={`form-control `}
              />
            </div>

            <div className="mb-4">
              <label>
                Restaurant Id:
                <span className="text-danger">
                  {' '}
                  <b>*</b>
                </span>
              </label>
              <input
                style={{ backgroundColor: 'white', color: 'black' }}
                type="number"
                name="restaurantId"
                value={formData.restaurantId}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value >= 0) { 
                    handleChange(e);
                  }
                }}
                required
                placeholder="Field is required"
                className={`form-control `}
              />
            </div>

            <div className="mb-4">
              <label>
                Description:
                <span className="text-danger">
                  {' '}
                  <b>*</b>
                </span>
              </label>
              <input
                style={{ backgroundColor: 'white', color: 'black' }}
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Field is required"
                className={`form-control `}
              />
            </div>

            <div className="mb-4">
              <label>
                Address Line 1:
                <span className="text-danger">
                  {' '}
                  <b>*</b>
                </span>
              </label>
              <input
                style={{ backgroundColor: 'white', color: 'black' }}
                type="text"
                name="address.line1"
                value={formData.address.line1}
                onChange={handleChange}
                required
                placeholder="Field is required"
                className={`form-control `}
              />
            </div>

            <div className="mb-4">
              <label>
                Address Line 2:
                
              </label>
              <input
                style={{ backgroundColor: 'white', color: 'black' }}
                type="text"
                name="address.line2"
                value={formData.address.line2}
                onChange={handleChange}
                className={`form-control `}
              />
            </div>

            <div className="mb-4">
              <label>
                City:
                <span className="text-danger">
                  {' '}
                  <b>*</b>
                </span>
              </label>
              <input
                style={{ backgroundColor: 'white', color: 'black' }}
                type="text"
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
                required
                placeholder="Field is required"
                className={`form-control `}
              />
            </div>

            <div className="mb-4">
              <label>
                State:
                <span className="text-danger">
                  {' '}
                  <b>*</b>
                </span>
              </label>
              <input
                style={{ backgroundColor: 'white', color: 'black' }}
                type="text"
                name="address.state"
                value={formData.address.state}
                onChange={handleChange}
                required
                placeholder="Field is required"
                className={`form-control `}
              />
            </div>

            <div className="mb-4">
              <label>
                Postal Code:
                <span className="text-danger">
                  {' '}
                  <b>*</b>
                </span>
              </label>
              <input
                style={{ backgroundColor: 'white', color: 'black' }}
                type="number"
                name="address.postalCode"
                value={formData.address.postalCode}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value >= 0) { 
                    handleChange(e);
                  }
                }}
                required
                placeholder="Field is required"
                className={`form-control `}
              />
            </div>

            <div className="mb-4">
              <label>
                Country:
                <span className="text-danger">
                  {' '}
                  <b>*</b>
                </span>
              </label>
              <input
                style={{ backgroundColor: 'white', color: 'black' }}
                type="text"
                name="address.country"
                value={formData.address.country}
                onChange={handleChange}
                required
                placeholder="Field is required"
                className={`form-control `}
              />
            </div>

            <div className="mb-4">
              <label>
                Cuisine:
                <span className="text-danger">
                  {' '}
                  <b>*</b>
                </span>
              </label>
              <select
                style={{ backgroundColor: 'white', color: 'black' }}
                name="cuisineTypeCategory"
                value={formData.cuisineTypeCategory}
                onChange={handleChange}
                required
                className={`form-control `}
              >
                <option value="">Select</option>
                <option value="Italian">Italian</option>
                <option value="Asian">Asian</option>
                <option value="Chinese">Chinese</option>
                <option value="Indian">Indian</option>
                <option value="Mexican">Mexican</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label>
                Opening Hours:
                <span className="text-danger">
                  {' '}
                  <b>*</b>
                </span>
              </label>
              <input
      style={{ backgroundColor: 'white', color: 'black' }}
      type="text"
      name="openingHours"
      value={formData.openingHours}
      onChange={handleChange}
      required
      placeholder="e.g. 09:00 - 17:00"
      className="form-control"
    />
            </div>
            {/* <div className="form-group mt-2">
                <label htmlFor="stock_field1">Is Available</label>
                <input
                  style={{ backgroundColor: 'white', color: 'black' }}
                  type="checkbox"
                  id="stock_field1"
                  className=" mt-2"
                  onChange={onIsAvailableChange}
                  checked={isAvailable}
                />
              </div> */}
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn my-3 px-4 btn rounded w-100 my-4">
                Update Restaurant
              </button>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default EditRestaurant;
