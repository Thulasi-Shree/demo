import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import ReusableTable from '../../components/ReusableTable';
import 'react-datepicker/dist/react-datepicker.css';
import ReactPaginate from 'react-paginate';
import './OrderHistory.css';

const OrdersHistory1 = () => {
  const defaultEndDate = new Date();
  defaultEndDate.setDate(defaultEndDate.getDate() - 1);
  const defaultStartDate = new Date();
  defaultStartDate.setMonth(defaultStartDate.getMonth() - 6);

  const user = JSON.parse(localStorage.getItem('user'));
  const { restaurantId, role } = user;
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 100;
  const [restaurant, setRestaurant] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedBranch, setSelectedBranch] = useState(restaurantId || 'all');
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [orderType, setOrderType] = useState('Pickup');
  const [nonActiveOrders, setNonActiveOrders] = useState([]);
  const navigate = useNavigate();

  const headers = [
    'Sl No',
    'Customer',
    'Email Address',
    'Phone No',
    'Restaurant Branch',
    'Order Date'
  ];

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleOrderTypeChange = (e) => {
    setOrderType(e.target.value);
  };

  const formatAddress = (address) => {
    return `${address.line1}, ${address.city}, ${address.state} - ${address.postalCode}, ${address.country}`;
  };

  const fetchOrders = async () => {
    try {
      let response;

      if (selectedBranch === 'all') {
        response = await axios.get(
          `/api/orders/expired/all?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&orderType=${orderType}&page=${page + 1}&pageSize=${pageSize}`
        );
      } else {
        response = await axios.post(
          `/api/orders/expired?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&orderType=${orderType}&page=${page + 1}&pageSize=${pageSize}`,
          { restaurantId: selectedBranch }
        );
      }
      const { data } = response;

      if (data) {
        setNonActiveOrders(data.nonActiveOrders || []);
        setTotalOrders(data.totalOrders || 0);
        setTotalPrice(data.totalPrice || 0);
        setTotalPages(data.totalPages || 0);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const onViewDetails = (id) => {
    navigate(`/order/${id}`);
  };

  const handlePageClick = (selectedPage) => {
    setPage(selectedPage.selected);
  };

  useEffect(() => {
    fetchOrders();
  }, [selectedBranch, orderType, startDate, endDate, page]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('/api/restaurant/get');
        setRestaurant(response.data.data || []);
      } catch (error) {
        console.error('Error fetching restaurants:', error.message);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="bg-white text-black">
      <div className="col-11 mx-auto" id="CardText">
        <div className="row">
          <h4 className="mt-4 mb-4 text-center" style={{ fontWeight: 'bold' }}>
            ORDER HISTORY
          </h4>
          <div className="col-lg-6 col-md-5 col-xs-12 col-sm-12 mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label>
                <span className="">Start Date:</span>{' '}
                <DatePicker
                  className="form-select mb-3 text-black"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="yyyy-MM-dd"
                />
              </label>
              <div>
                <label className="mx-1">
                  <span className="CardText">End Date:</span>{' '}
                  <DatePicker
                    className="form-select mb-3 text-black"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="yyyy-MM-dd"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 mt-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h5 className="my-2 CardText">Select Order Type</h5>
              <select
                value={orderType}
                onChange={handleOrderTypeChange}
                className="form-select mb-3"
              >
                <option value="Pickup">Pickup</option>
                <option value="Delivery">Delivery</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 mt-2">
              <h5 className="col-12 CardText">Select a branch</h5>
              {role !== 'admin' && (
                <select
                  className="form-select mb-3"
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
                        {restaurant.restaurantBranch} -{' '}
                        {formatAddress(restaurant.address)}
                      </option>
                    ))}
                </select>
              )}
            </div>
            <h6 className="col-3 CardText">Total orders: {totalOrders}</h6>
          </div>
          <ReusableTable
            headers={headers}
            data={nonActiveOrders}
            onViewDetails={onViewDetails}
          />
   
          <ReactPaginate
              className="pagination"
              pageCount={totalPages}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName="pagination"
              activeClassName="active"
            />
         
        </div>
      </div>
    </div>
  );
};

export default OrdersHistory1;
