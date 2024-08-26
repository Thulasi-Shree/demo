
// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import Pagination from 'react-js-pagination';
// import ReusableTable from '../../components/ReusableTable';
// import './userList.css';

// const CustomerList = () => {
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [role, setRole] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsCount, setProductsCount] = useState(0);
//   const [resPerPage, setResPerPage] = useState(0);
//   const [assignBranch, setAssignBranch] = useState('');
//   const [assignBranchId, setAssignBranchId] = useState('');
//   const [allUsers, setAllUsers] = useState([]);
//   const [searchInput, setSearchInput] = useState('');
//   const [searchResult, setSearchResult] = useState([]);
//   const [selectedRoleFilter, setSelectedRoleFilter] = useState('user');
//   const fetchUsers = async () => {
//     try {
//       let response;

//       if (searchInput) {
//         response = await axios.get(
//           `/api/admin/users?&keyword=${searchInput}&page=${currentPage}`
//         );
//       } else {
//         response = await axios.get(`/api/admin/users?&page=${currentPage}`);
//       }

//       setResPerPage(response.data.resPerPage);
//       setProductsCount(response.data.count);
//       setAllUsers(response.data.Users);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handlePageChange = (pageNo) => {
//     setCurrentPage(pageNo);
//     fetchUsers(pageNo);
//   };
//   const handleShowEditModal = (user) => {
//     setSelectedUser(user);
//     setShowEditModal(true);
//   };

//   const handleCloseEditModal = () => {
//     setShowEditModal(false);
//     setSelectedUser(null);
//   };
//   const getRoleDisplayName = (role) => {
//     switch (role) {
//       case 'superAdmin':
//         return 'Super Admin';
//       case 'admin':
//         return 'Admin';
//       case 'user':
//         return 'Customer';
//       default:
//         return role;
//     }
//   };
//   const filteredUsers = selectedRoleFilter
//     ? allUsers.filter((user) => user.role === selectedRoleFilter)
//     : allUsers;
//   const handleEdit = async () => {
//     try {
//       await axios.put(`/api/admin/user/${selectedUser._id}`, {
//         role,
//         assignBranch,
//         assignBranchId
//       });

//       console.log('User updated successfully');
//       fetchUsers();
//       setRole('');
//       setAssignBranch('');
//       setAssignBranchId('');
//       handleCloseEditModal();
//     } catch (error) {
//       console.error('Error editing user:', error);
//     }
//   };
//   const handleDelete = async (userId) => {
//     try {
//       await axios.delete(`/api/admin/user/${userId}`);
//       console.log(`User with ID ${userId} deleted successfully`);
//       fetchUsers();
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const headers = ['Sl No', 'Name', 'Email', 'Phone', 'Role', 'Actions'];

//   useEffect(() => {
//     fetchUsers(currentPage);
//   }, [currentPage, searchInput]);

//   return (
//     <div className="bg-white text-white" style={{ minHeight: '58vh' }}>
//       <div className="container-fluid">
//         <div className="row">
//           <h5 className="mt-3" id="CardText" style={{ fontWeight: 'bold' }}>
//             USERS - Customer
//           </h5>
//           <div
//             className="col mt-4"
//             style={{ display: 'flex', justifyContent: 'space-between' }}
//           >
//             <div style={{ display: 'flex' }}>
//               <div>
//                 <input
//                   type="text"
//                   className={`form-control `}
//                   style={{
//                     display: 'flex',
//                     color: 'black',
//                     backgroundColor: 'white'
//                   }}
//                   placeholder="Search user"
//                   value={searchInput}
//                   onChange={(e) => setSearchInput(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//           <ReusableTable
//             headers={headers}
//             data={(searchResult.length > 0 ? searchResult : filteredUsers).map(
//               (user) => ({
//                 ...user,
//                 role: getRoleDisplayName(user.role),
//                 actions: (
//                   <div>
//                     <Button
//                       className="btn my-1 px-4 btn border border-warning rounded bg-white text-black"
//                       onClick={() => handleDelete(user._id)}
//                     >
//                       <FontAwesomeIcon icon={faTrash} />
//                     </Button>
//                   </div>
//                 )
//               })
//             )}
//           />
//           {/* <div className="pagination"> */}
//           <Pagination
//       className="pagination123"
//       activePage={currentPage}
//       containerClassName="pagination123"
//       itemsCountPerPage={resPerPage}
//       totalItemsCount={productsCount}
//       onChange={handlePageChange}
//       nextPageText="Next"
//       firstPageText="First"
//       lastPageText="Last"
//       itemClass="page-item123"
//       linkClass="page-link123"
//     />
            
//           {/* </div> */}
//         </div>

//         <Modal show={showEditModal} onHide={handleCloseEditModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>Edit User</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form>
//               <Form.Group controlId="role">
//                 <Form.Label>Role</Form.Label>
//                 <Form.Control
//                   as="select"
//                   value={role}
//                   onChange={(e) => setRole(e.target.value)}
//                 >
//                   <option value="">Select Role</option>
//                   <option value="user">user</option>
//                   <option value="admin">Admin</option>
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group controlId="assignBranch">
//                 <Form.Label>Assign Branch Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter branch name"
//                   value={assignBranch}
//                   onChange={(e) => setAssignBranch(e.target.value)}
//                 />
//               </Form.Group>
//               <Form.Group controlId="assignBranchId">
//                 <Form.Label>Assign Branch Id</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter branch name"
//                   value={assignBranchId}
//                   onChange={(e) => setAssignBranchId(e.target.value)}
//                 />
//               </Form.Group>
//             </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button className="btn-custom" onClick={handleCloseEditModal}>
//               Edit
//             </Button>
//             <Button className="btn-custom" onClick={handleEdit}>
//               Delete
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default CustomerList;
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import ReusableTable from '../../components/ReusableTable';
import './userList.css';

const CustomerList = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false); // New state for delete confirmation modal
  const [selectedUser, setSelectedUser] = useState(null);
  const [role, setRole] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsCount, setProductsCount] = useState(0);
  const [resPerPage, setResPerPage] = useState(0);
  const [assignBranch, setAssignBranch] = useState('');
  const [assignBranchId, setAssignBranchId] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [selectedRoleFilter, setSelectedRoleFilter] = useState('user');
  const fetchUsers = async () => {
    try {
      let response;

      if (searchInput) {
        response = await axios.get(
          `http://localhost:8000/api/admin/users?&keyword=${searchInput}&page=${currentPage}`
        );
      } else {
        response = await axios.get(`http://localhost:8000/api/admin/users?&page=${currentPage}`);
      }

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

  const handleShowDeleteConfirmModal = (user) => {
    setSelectedUser(user);
    setShowDeleteConfirmModal(true);
  };

  const handleCloseDeleteConfirmModal = () => {
    setShowDeleteConfirmModal(false);
    setSelectedUser(null);
  };

  const getRoleDisplayName = (role) => {
    switch (role) {
      case 'superAdmin':
        return 'Super Admin';
      case 'admin':
        return 'Admin';
      case 'user':
        return 'Customer';
      default:
        return role;
    }
  };

  const filteredUsers = selectedRoleFilter
    ? allUsers.filter((user) => user.role === selectedRoleFilter)
    : allUsers;

  const handleEdit = async () => {
    try {
      await axios.put(`/api/admin/user/${selectedUser._id}`, {
        role,
        assignBranch,
        assignBranchId,
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

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/admin/user/${selectedUser._id}`);
      console.log(`User with ID ${selectedUser._id} deleted successfully`);
      fetchUsers();
      handleCloseDeleteConfirmModal();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const headers = ['Sl No', 'Name', 'Email', 'Phone', 'Role', 'Actions'];

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage, searchInput]);

  return (
    <div className="bg-white text-white" style={{ minHeight: '58vh' }}>
      <div className="container-fluid">
        <div className="row">
          <h5 className="mt-3 uppercase" id="CardText" style={{ fontWeight: 'bold' }}>
            USERS - Customer
          </h5>
          <div
            className="col mt-4"
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex' }}>
              <div>
                <input
                  type="text"
                  className={`form-control `}
                  style={{
                    display: 'flex',
                    color: 'black',
                    backgroundColor: 'white',
                  }}
                  placeholder="Search user"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
            </div>
          </div>
          <ReusableTable
            headers={headers}
            data={(searchResult.length > 0 ? searchResult : filteredUsers).map(
              (user, index) => ({
                ...user,
                role: getRoleDisplayName(user.role),
                actions: (
                  <div>
                    <Button
                      className="btn my-1 px-4 btn border border-warning rounded bg-white text-black"
                      onClick={() => handleShowDeleteConfirmModal(user)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </div>
                ),
              })
            )}
          />
          <Pagination
            // className="pagination123"
            activePage={currentPage}
            // containerClassName="pagination123"
            itemsCountPerPage={resPerPage}
            totalItemsCount={productsCount}
            onChange={handlePageChange}
            nextPageText="Next"
            firstPageText="First"
            lastPageText="Last"
            itemClass="page-item123"
            linkClass="page-link123"
          />
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
            <Button className="btn-custom" onClick={handleCloseEditModal}>
              Cancel
            </Button>
            <Button className="btn-custom" onClick={handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Delete Confirmation Modal */}
        <Modal show={showDeleteConfirmModal} onHide={handleCloseDeleteConfirmModal}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this user?
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
    </div>
  );
};

export default CustomerList;

