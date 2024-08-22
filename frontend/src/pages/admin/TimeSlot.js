import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import CustomAlert from 'components/utilities/Alert';


// Axios instance
const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 1000,
});

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
   background-color: white;
  color: black;
  cursor: pointer;

`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background-color: white;
  color: black;
   border: 1px solid #ddd;
  padding: 10px;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

const TimeSlotManager = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [newTimeSlot, setNewTimeSlot] = useState('');
  const [restaurantId, setRestaurantId] = useState('');
  const [restaurantBranch, setRestaurantBranch] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [updatedTimeSlot, setUpdatedTimeSlot] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantName, setRestaurantName] = useState('');
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [alert, setAlert] = useState({ message: '', type: '' });

  // Fetch all restaurants
  const fetchRestaurants = async () => {
    try {
      const response = await axiosInstance.get('/restaurant/get');
      setRestaurants(response.data.data);
    } catch (error) {
      setError('Error fetching restaurants');
    }
  };

  // Fetch all time slots
  const fetchTimeSlots = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get('/time-slot');
      setTimeSlots(response.data.timeSlots);
    } catch (error) {
      setError('Error fetching time slots');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRestaurants();
    fetchTimeSlots();
  }, []);

  const addTimeSlot = async () => {
    if (!validateOpeningHours(newTimeSlot)) {
      setAlert({ message: 'Please enter a valid time range in the format HH:MM - HH:MM', type: 'success' });
      return;
    }
    if (!newTimeSlot || !restaurantId || !restaurantBranch || !restaurantName) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post('/add/time-slot', {
        newTimeSlot,
        restaurantId,
        restaurantBranch,
        restaurantName,  // Include restaurantName in the request
      });
      setTimeSlots([...timeSlots, response.data.timeSlot]);
      setNewTimeSlot('');
      setRestaurantId('');
      setRestaurantBranch('');
      setRestaurantName('');  // Reset restaurantName
    } catch (error) {
      setError('Error adding time slot');
    }
    setLoading(false);
  };
  const validateOpeningHours = (value) => {
    const timeRangeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9]) - ([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
    return timeRangeRegex.test(value);
  };

  const handleShowDeleteConfirmModal = (menuId) => {
    setSelectedId(menuId);
    setShowDeleteConfirmModal(true);
  };

  const handleCloseDeleteConfirmModal = () => {
    setShowDeleteConfirmModal(false);
    setSelectedId(null);
  };
  const handleCloseAlert = () => {
    setAlert({ message: '', type: '' });
    setNewTimeSlot('')
    setUpdatedTimeSlot('')

    
  };
  // Update a time slot by ID
  const updateTimeSlot = async (id) => {
    if (!validateOpeningHours(updatedTimeSlot)) {
      setAlert({ message: 'Please enter a valid time range in the format HH:MM - HH:MM', type: 'success' });
      return;
    }
    if (!updatedTimeSlot) {
      setError('Please enter an updated time slot');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.put(`/update/time-slot/${id}`, {
        updatedTimeSlot,
      });
      const updatedSlot = response.data.timeSlot;
      setTimeSlots(timeSlots.map((slot) => (slot._id === id ? updatedSlot : slot)));
      setSelectedTimeSlot(null);
      setUpdatedTimeSlot('');
    } catch (error) {
      setError('Error updating time slot');
    }
    setLoading(false);
  };

  // Delete a time slot by ID
  const deleteTimeSlot = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axiosInstance.delete(`/time-slot/${id}`);
      setTimeSlots(timeSlots.filter((slot) => slot._id !== id));
      handleCloseDeleteConfirmModal()
    } catch (error) {
      setError('Error deleting time slot');
    }
    setLoading(false);
  };
  const handleRestaurantChange = (e) => {
    const selectedRestaurant = restaurants.find((r) => r._id === e.target.value);
    setRestaurantId(selectedRestaurant.restaurantId);
    setRestaurantBranch(selectedRestaurant.restaurantBranch);
    setRestaurantName(selectedRestaurant.restaurantName); // Assuming restaurantName exists in restaurant data
  };


  return (
    <Container className='m-5 bg-white mx-auto Cardimg123'>
      <Title>Time Slot Manager</Title>
      {alert.message && (
        <CustomAlert message={alert.message} type={alert.type} onClose={handleCloseAlert} />

      )}
      <Section>
        <h2>Add New Time Slot</h2>
        
         <input
      style={{ backgroundColor: 'white', color: 'black' }}
      type="text"
      name="TimeSlotnew"
      value={newTimeSlot}
      onChange={(e) => setNewTimeSlot(e.target.value)}
      required
      placeholder="e.g. 09:00 - 17:00"
      className="form-control"
    />
        <Select value={restaurantId} onChange={handleRestaurantChange}>
          <option value="">Select Restaurant</option>
          {restaurants.map((restaurant) => (
            <option key={restaurant._id} value={restaurant._id}>
              {restaurant.restaurantBranch}
            </option>
          ))}
        </Select>
        <Input
          type="text"
          value={restaurantBranch}
          onChange={(e) => setRestaurantBranch(e.target.value)}
          placeholder="Enter Branch name"
          readOnly
        />
        <Button className='btn my-3' onClick={addTimeSlot} disabled={loading}>
          {loading ? 'Adding...' : 'Add Time Slot'}
        </Button>
      </Section>

      {selectedTimeSlot && (
        <Section>
          <h2>Update Time Slot</h2>
          
           <input
      style={{ backgroundColor: 'white', color: 'black' }}
      type="text"
      name="TimeSlot"
      value={updatedTimeSlot}
      onChange={(e) => setUpdatedTimeSlot(e.target.value)}
      required
      placeholder="e.g. 09:00 - 17:00"
      className="form-control"
    />
          <Button className='btn ' onClick={() => updateTimeSlot(selectedTimeSlot._id)} disabled={loading}>
            {loading ? 'Updating...' : 'Update Time Slot'}
          </Button>
        </Section>
      )}

      <Section>
        <h2>Time Slots</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Table>
            <thead>
              <tr>
                <TableHeader>Time Slot</TableHeader>
                <TableHeader>Branch Name</TableHeader>
                <TableHeader>Actions</TableHeader>
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((slot) => (
                <tr key={slot._id}>
                  <TableCell>{slot.slot}</TableCell>
                  <TableCell>{slot.restaurantBranch}</TableCell>
                  <TableCell>
                    <Button className='border border-warning rounded m-2' onClick={() => handleShowDeleteConfirmModal(slot._id)}>Delete</Button>
                    <Button
                      className='border border-warning rounded'
                      onClick={() => {
                        setSelectedTimeSlot(slot);
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth"
                        });
                      }}
                    >
                      Update
                    </Button>
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Section>
      <Modal show={showDeleteConfirmModal} onHide={handleCloseDeleteConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete?
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn' onClick={handleCloseDeleteConfirmModal}>
            Cancel
          </Button>
          <Button  className='btn' onClick={() => deleteTimeSlot(selectedId)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TimeSlotManager;
