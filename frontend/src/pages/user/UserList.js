import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import ReusableTable from '../../components/ReusableTable';
import './userList.css';

const UsersList = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [role, setRole] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [resPerPage, setResPerPage] = useState(0);
  const [assignBranch, setAssignBranch] = useState('');
  const [assignBranchId, setAssignBranchId] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  // const [searchInput, setSearchInput] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [searchResult, setSearchResult] = useState([]);
  const [selectedRoleFilter, setSelectedRoleFilter] = useState('');
  const navigate = useNavigate();
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `/api/admin/admins?&page=${currentPage}`
      );
      // Other logic...

      setResPerPage(response.data.resPerPage);
      setProductsCount(response.data.count);
      setAllUsers(response.data.Users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handlePageChange = (pageNo) => {
    setCurrentPage(pageNo);
    fetchUsers(pageNo);
  };
  const handleShowEditModal = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedUser(null);
  };
  const handleAdd = () => {
    navigate('/admin/create');
  };
  const handleRoleFilterChange = (e) => {
    setSelectedRoleFilter(e.target.value);
  };
  const getRoleDisplayName = (role) => {
    switch (role) {
      case 'superAdmin':
        return 'Super Admin';
      case 'admin':
        return 'Admin';
      case 'user':
        return 'Customer';
      // Add more cases as needed
      default:
        return role; // Return the role as is if no match
    }
  };
  const filteredUsers = selectedRoleFilter
    ? allUsers.filter((user) => user.role === selectedRoleFilter)
    : allUsers.filter((user) => user.role === 'admin');

  const handleEdit = async () => {
    try {
      await axios.put(`/api/admin/user/${selectedUser._id}`, {
        role,
        assignBranch,
        assignBranchId
      });

      console.log('User updated successfully');
      fetchUsers();
      setRole('');
      setAssignBranch('');
      setAssignBranchId('');
      handleCloseEditModal();
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`/api/admin/user/${userId}`);
      console.log(`User with ID ${userId} deleted successfully`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const headers = [
    'Sl No',
    'Name',
    'Email',
    'Phone',
    'Role',
    'Restaurant Branch',
    // 'Branch ID',
    'Actions'
  ];

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  return (
    <div className="bg-white text-black" style={{ minHeight: '58vh' }}>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-12 col-xs-12 col-sm-12 col-md-12 text-black"
          >
            <h5 className="mt-3 text-black" style={{ fontWeight: 'bold' }}>
              <></>USERS - Admin
            </h5>
            <div className="row">
              <div className="col-lg-3 col-md-4 text-black col-xs-12">
                <label className='text-black'>Filter by Role:</label>
                <div className="mx-4">
                  <select
                    value={selectedRoleFilter}
                    onChange={handleRoleFilterChange}
                    className="form-control mt-3 text-black"
                  >
                    {/* <option value="">All</option> */}
                    <option value="admin">Admin</option>
                    <option value="superAdmin">Super Admin</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6 col-md-4 mx-auto ">
                <Link
                  className="btn my-3 px-4 btn rounded mt-3"
                  style={{ background: '#51bc8fb5' }}
                  to="/admin/customer/list"
                >
                  View Customers
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-6 mt-3 ">
                <button className="btn my-1 px-4 btn rounded " onClick={handleAdd}>
                  Create Admin
                </button>
              </div>

              <ReusableTable
                headers={headers}
                data={(searchResult.length > 0
                  ? searchResult
                  : filteredUsers
                ).map((user) => ({
                  ...user,
                  role: getRoleDisplayName(user.role),
                  actions: (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button
                        className="btn my-1 px-3 btn  rounded "
                        onClick={() => handleDelete(user._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </div>
                  )
                }))}
              />
              {/* <div className="pagination col-md-12 col-xs-3 mx-auto">
                <div className="page-item">
                  <div className="page-link"> */}
                    <Pagination
                      className="pagination btn bg-white"
                      activePage={currentPage}
                       containerClassName="pagination"
                      itemsCountPerPage={resPerPage}
                      totalItemsCount={productsCount}
                      onChange={handlePageChange}
                      nextPageText="Next"
                      firstPageText="First"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  {/* </div>
                </div>
              </div> */}
            </div>

            <Modal show={showEditModal} onHide={handleCloseEditModal}>
              <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="role">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      as="select"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Select Role</option>
                      <option value="user">user</option>
                      <option value="admin">Admin</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="assignBranch">
                    <Form.Label>Assign Branch Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter branch name"
                      value={assignBranch}
                      onChange={(e) => setAssignBranch(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="assignBranchId">
                    <Form.Label>Assign Branch Id</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter branch name"
                      value={assignBranchId}
                      onChange={(e) => setAssignBranchId(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="btn-custom my-global-button"
                  onClick={handleCloseEditModal}
                >
                  Edit
                </Button>
                <Button
                  className="btn-custom my-global-button"
                  onClick={handleEdit}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
