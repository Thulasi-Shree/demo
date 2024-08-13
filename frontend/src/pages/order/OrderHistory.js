import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import ReusableTable from '../../components/ReusableTable';
import 'react-datepicker/dist/react-datepicker.css';
import ReactPaginate from 'react-paginate';
import './OrderHistory.css';

const OrdersHistory = () => {
  const defaultEndDate = new Date();
  const defaultStartDate = new Date();
  defaultStartDate.setMonth(defaultStartDate.getMonth() - 6);
  const user = JSON.parse(localStorage.getItem('user'));
  const { restaurantId } = user;
  const { role } = user;
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
  // const chartRef = useRef(null);
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
  const handleOrderTypeChange = (selectedOrderType) => {
    setOrderType(selectedOrderType);
  };
  const formatAddress = (address) => {
    return `${address.line1}, ${address.city}, ${address.state} - ${address.postalCode}, ${address.country}`;
  };

  const fetchOrders = async () => {
    try {
      let response;

      if (selectedBranch === 'all') {
        response = await axios.get(
          `/api/admin/orders?startDate=${startDate}&endDate=${endDate}&orderType=${orderType}&page=${
            page + 1
          }&pageSize=${pageSize}`
        );
      } else {
        const restaurantId = { restaurantId: selectedBranch };
        response = await axios.post(
          `/api/admin/orderHistory-nonActive?startDate=${startDate}&endDate=${endDate}&orderType=${orderType}&page=${
            page + 1
          }&pageSize=${pageSize}`,
          restaurantId
        );
      }
      const { data } = response;
      const {
        nonActiveOrders: extractedNonActiveOrders,
        totalOrders,
        totalPrice
      } = data;
      setNonActiveOrders(extractedNonActiveOrders);
      setTotalOrders(totalOrders);
      setTotalPrice(totalPrice);

      setOrders(orders || []);
      setTotalPages(Math.ceil(totalOrders / pageSize));
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
    // drawPieChart();
  }, [
    selectedBranch,
    orderType,
    startDate,
    endDate,
    totalOrders,
    totalPrice,
    page,
    pageSize
  ]);
  useEffect(() => {
    // Fetch time slots from the API
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
  return (
    <div className="bg-white text-black">
      <div className="col-11 mx-auto" id="CardText">
        <div className="row">
          <h4 className="mt-4 mb-4 text-center " style={{ fontWeight: 'bold' }}>
            ORDER HISTORY
          </h4>
          <div
            className="col-lg-6 col-md-5 col-xs-12 col-sm-12 mt-2"
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div
              className="form-group"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <label>
                <span className="">Start Date:</span>{' '}
                <DatePicker
                  className="form-control mb-3 text-black"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="yyyy-MM-dd"
                />
              </label>
              <div>
                <label className="mx-1">
                  <span className="CardText">End Date:</span>{' '}
                  <DatePicker
                    className="form-control mb-3 text-black"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="yyyy-MM-dd"
                  />
                </label>
              </div>
            </div>
            {/* Remove the Submit button as it's no longer needed */}
          </div>
          <div
            className="col-lg-6 col-md-6 col-xs-12 col-sm-12 mt-2"
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div>
              <h5 className="my-2 CardText">Select Order Type</h5>
              <label>
                <input
                  type="radio"
                  value="Pickup"
                  checked={orderType === 'Pickup'}
                  className="ms-1"
                  onChange={() => handleOrderTypeChange('Pickup')}
                />
                <span className="CardText ms-1">Pickup</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Delivery"
                  checked={orderType === 'Delivery'}
                  className="ms-3"
                  onChange={() => handleOrderTypeChange('Delivery')}
                />
                <span className="CardText ms-1">Delivery</span>
              </label>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 mt-2">
              {/* <canvas className="col-6" ref={chartRef} width="200" height="200" /> */}
              <h5 className="col-12 CardText">Select a branch</h5>
              {role !== 'admin' && (
                <select
                  className="form-control mb-3"
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
            {/* <h6 className="col-3">Total price: {totalPrice}</h6> */}
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

export default OrdersHistory;
