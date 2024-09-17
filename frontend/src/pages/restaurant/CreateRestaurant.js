import React, { useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import CustomAlert from 'components/utilities/Alert';
import { Link, useNavigate } from 'react-router-dom';

const CreateRestaurant = () => {
  const [formData, setFormData] = useState({
    restaurantName: 'Grand India - Restaurant & Catering',
    restaurantBranch: '',
    restaurantId: '',
    description: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      latitude: '',
      longitude: ''
    },
    cuisineTypeCategory: '',
    openingHours: ''
  });
  const [alert, setAlert] = useState({ message: '', type: '' });
  const navigate = useNavigate()
  const resetFormData = () => {
    setFormData({
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
        country: '',
        latitude: '',
        longitude: ''
      },
      cuisineTypeCategory: '',
      openingHours: ''
    });
  };
  
  const handleChange = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
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
  const handleCloseAlert = () => {
    setAlert({ message: '', type: '' });
    

  };
  const validateOpeningHours = (value) => {
    const timeRangeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9]) - ([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
    return timeRangeRegex.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateOpeningHours(formData.openingHours)) {
      setAlert({ message: 'Please enter a valid time range in the format HH:MM - HH:MM', type: 'success' });
      return;
    }
    try {
      await axios.post('/api/restaurant/create', formData);
      console.log('Restaurant created successfully!');
      // alert('Restaurant created Successfully!');
      setAlert({ message: 'Restaurant created Successfully!', type: 'success' });

      resetFormData();
    } catch (error) {
      console.error('Error creating restaurant:', error);
      setAlert({ message:'Error creating restaurant. Please ensure the provided data is unique and try again.' , type: 'error' });

      // alert('Error creating restaurant. Please ensure the provided data is unique and try again.');
    }
  };

  return (
    <div className="bg-white text-black py-4">
      <Card className="col-md-5 container py-4 my-5 Cardimg123">
        <h4 className='text-black uppercase'>Create a New Restaurant</h4>
        {alert.message && (
        <CustomAlert message={alert.message} type={alert.type} onClose={handleCloseAlert} />

      )}
        <form onSubmit={handleSubmit} className="address-container">
          {/* Add input fields for each restaurant property */}
          <div className="mb-3">
            {' '}
            <label>
              Restaurant Name:{' '}
              <span className="text-danger">
                {' '}
                <b>*</b>
              </span>
            </label>
            <input
              style={{ backgroundColor: 'white', color: 'black' }}
              type="text"
              name="restaurantName"
              className={`form-control `}
              value={formData.restaurantName}
              onChange={handleChange}
              required
              placeholder="Field is required"
            />
          </div>

          <div className="mb-3">
            <label>
              Restaurant Branch:{' '}
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

          <div className="mb-3">
            <label>
              Restaurant Id:{' '}
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

          <div className="mb-3">
            <label>
              Description:{' '}
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
              {/* <span className="text-danger">
                {' '}
                <b>*</b>
              </span> */}
            </label>
            <input
              style={{ backgroundColor: 'white', color: 'black' }}
              type="text"
              name="address.line2"
              value={formData.address.line2}
              onChange={handleChange}
              // required
              placeholder="Field is required"
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
              Latitude:
              <span className="text-danger">
                {' '}
                <b>*</b>
              </span>
            </label>
            <input
              style={{ backgroundColor: 'white', color: 'black' }}
              type="number"
              name="address.latitude"
              value={formData.address.latitude}
              onChange={handleChange}
              required
               step="0.00000001"
              placeholder="Field is required"
              className={`form-control `}
            />
          </div>

          <div className="mb-3">
            {' '}
            <label>
              Longitude:{' '}
              <span className="text-danger">
                {' '}
                <b>*</b>
              </span>
            </label>
            <input
              style={{ backgroundColor: 'white', color: 'black' }}
              type="number"
              name="address.longitude"
              value={formData.address.longitude}
              onChange={handleChange}
              required
              step="0.00000001"
              placeholder="Field is required"
              className={`form-control `}
            />
          </div>

          <div className="mb-3">
            <label>
              Cuisine:{' '}
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

          <div className="mb-3">
    <label>
      Opening Hours:{' '}
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
          <div className="d-flex justify-content-center">
            <button className=" btn my-3 px-4 btn rounded w-100" type="submit">
              Create Restaurant
            </button>
          </div>
          <div className="d-flex justify-content-center">
              <Link to="/admin/restaurants" className="btn my-3 px-4 btn rounded w-100 my-4">
                Back
              </Link>
            </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateRestaurant;
