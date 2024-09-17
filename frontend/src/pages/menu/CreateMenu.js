import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import CategoryList from './dietaryPreferenceCategoryList';
import CategoryList1 from './MealTypeCategoryList';
import './CreateMenu.css';
import CustomAlert from 'components/utilities/Alert';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateMenu() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [alert, setAlert] = useState({ message: '', type: '' });
  const [dietaryPreferenceCategory, setDietaryPreferenceCategory] =
    useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [selectedCategoryId1, setSelectedCategoryId1] = useState(null);
  const [mealTypeCategory, setMealTypeCategory] = useState('');
  const [dietaryCategories, setDietaryCategories] = useState([]);
  const [mealCategories, setMealCategories] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [restaurantId, setRestaurantId] = useState('');
  const [restaurantBranch, setRestaurantBranch] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedRestaurantId, setSelectedRestaurantId] = useState('');
  const [loading, setLoading] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newMealCategoryName, setNewMealCategoryName] = useState('');
  const [isAddMealCategoryModalOpen, setAddMealCategoryModalOpen] =
    useState(false);
  const [categories, setCategories] = useState([]);
  const [isAddCategoryModalOpen, setAddCategoryModalOpen] = useState(false);
  const [viewCategoryModalOpen, setViewCategoryModalOpen] = useState(false);
  const [viewCategoryModalOpen1, setViewCategoryModalOpen1] = useState(false);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));  
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [showDeleteConfirmModal1, setShowDeleteConfirmModal1] = useState(false);
  const { role } = user;

  const navigate = useNavigate()
  const onImagesChange = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray, file]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  const handleCheckboxChange = () => {
    setIsAvailable(!isAvailable); // Toggle the checkbox value
  };
  const handleAddMealCategoryClick = () => {
    setAddMealCategoryModalOpen(!isAddMealCategoryModalOpen);
  };
  const fetchDietaryCategories = async () => {
    await axios
      .get('/api/dietary-preferences')
      .then((response) => setDietaryCategories(response.data.data))
      .catch((error) =>
        console.error('Error fetching dietary categories:', error)
      );
  };
  const fetchMealCategories1 = async () => {
    await axios
      .get('/api/meal-types')
      .then((response) => setMealCategories(response.data.data))
      .catch((error) =>
        console.error('Error fetching meal categories:', error)
      );
  };
  const handleSaveMealCategory = async () => {
    try {
      // Make an Axios POST request to save the new meal category
      await axios.post('/api/meal-types', {
        mealTypeCategory: newMealCategoryName
      });
      fetchMealCategories1();

      // Handle success, e.g., show a success message
      // alert('Meal Category Added Successfully!');
      setAlert({ message: 'Category Added Successfully!', type: 'success' });

      // Optionally, perform any other actions after successful category addition

      // Close the modal after successful addition
      setAddMealCategoryModalOpen(false);
      setNewCategoryName('')
setNewMealCategoryName('')
    } catch (error) {
      // Handle errors, e.g., show an error message
      // alert(error.message || 'An error occurred');
      setAlert({ message: error.message || 'An error occurred', type: 'error' });
    }
  };

  const handleAddCategoryClick = () => {
    console.log('handleAddCategoryClick called');
    setAddCategoryModalOpen(!isAddCategoryModalOpen);
  };
  const handleSaveCategory = async () => {
    try {
      // Make an Axios POST request to save the new category
      await axios.post('/api/dietary-preferences', {
        dietaryPreferenceCategory: newCategoryName
      });

      // Handle success, e.g., show a success message
      // alert('Category Added Successfully!');
      setAlert({ message: 'Category Added Successfully!', type: 'success' });
setNewCategoryName('')
setNewMealCategoryName('')
      // Optionally, perform any other actions after successful category addition
      fetchDietaryCategories();
      // Close the modal after successful addition
      setAddCategoryModalOpen(false);
    } catch (error) {
      // Handle errors, e.g., show an error message
      // alert(error.message || 'An error occurred');
      setAlert({ message: error.message || 'An error occurred', type: 'error' });
    }
  };
  const fetchCategories = () => {
    // Fetch dietary categories from API
    axios
      .get('/api/dietary-preferences')
      .then((response) => setCategories(response.data.data))
      .catch((error) =>
        console.error('Error fetching categories:', error)
      );
  };
  const fetchMealCategories = () => {
    // Fetch dietary categories from API
    axios
      .get('/api/meal-types')
      .then((response) => setCategories(response.data.data))
      .catch((error) =>
        console.error('Error fetching categories:', error)
      );
  };

  const handleViewAllCategories = () => {
    // Fetch and display all categories when "View all Category" is clicked
    setViewCategoryModalOpen1(true);
    fetchCategories();
  };
  const handleViewAllCategories1 = () => {
    // Fetch and display all categories when "View all Category" is clicked
    setViewCategoryModalOpen(true);
    fetchMealCategories();
  };

  const handleDeleteCategory = async () => {
    try {
      await axios.delete(`/api/dietary-preferences/${selectedCategoryId}`);
      setAlert({ message: 'Category Deleted Successfully!', type: 'success' });
      setAddCategoryModalOpen(false);
      setViewCategoryModalOpen(false)
      setViewCategoryModalOpen1(false)
      setShowDeleteConfirmModal(false)
      fetchCategories();
      fetchDietaryCategories();
    } catch (error) {
      setAlert({ message: error.message || 'An error occurred', type: 'error' });
    }
  };

  const handleDeleteCategory1 = async () => {
    try {
      await axios.delete(`/api/meal-types/${selectedCategoryId1}`);
      setAlert({ message: 'Category Deleted Successfully!', type: 'success' });
      setAddCategoryModalOpen(false);
      setAddMealCategoryModalOpen(false)
      
      setViewCategoryModalOpen(false)
      setViewCategoryModalOpen1(false)
      fetchMealCategories1();
      fetchMealCategories();
    } catch (error) {
      setAlert({ message: error.message || 'An error occurred', type: 'error' });
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('dietaryPreferenceCategory', dietaryPreferenceCategory);
      formData.append('mealTypeCategory', mealTypeCategory);
      formData.append('isAvailable', isAvailable);
      if (role === 'superAdmin') {
        formData.append('restaurantBranch', selectedBranch);
        formData.append('restaurantId', selectedRestaurantId);
      } else {
        formData.append('restaurantBranch', restaurantBranch);
        formData.append('restaurantId', restaurantId);
      }

      images.forEach((image) => {
        formData.append('images', image);
      });

      await axios.post('/api/admin/product/new', formData);

      // alert('Product Created Successfully!');
      setAlert({ message: 'Menu Created Successfully!', type: 'success' });



      // navigate('/admin/products');
    } catch (error) {
      // console.error('Error creating product:', error);
      setAlert({ message: "Error creating menu", type: 'error' });

      setError('Error creating menu. Please try again.');
    } finally {
      setLoading(false);
      setName('');
      setPrice('');
      setIsAvailable(false);
      setMealTypeCategory([]); // Reset to an empty string instead of 'Select'
      setDietaryPreferenceCategory([]); // Reset to an empty string instead of 'Select'
      setDietaryCategories([]);
      setMealCategories([]);
      setImages(['']);
       setImagesPreview([]);
      setDescription('');
      if (role === 'superAdmin') {
        setSelectedBranch(''); // Reset selected branch if superAdmin
        setSelectedRestaurantId(''); // Reset selected restaurant ID
      }
      fetchCategories();
      fetchDietaryCategories();
      fetchMealCategories1();
      fetchMealCategories();
    }
  };
  const handleCloseAlert = () => {
    setAlert({ message: '', type: '' });
    navigate('/admin/menus')
  };

  const handleShowDeleteConfirmModal1 = (selectedMealId) => {
    setSelectedCategoryId1(selectedMealId)
    setShowDeleteConfirmModal1(true);
    setAddCategoryModalOpen(false);
    setAddMealCategoryModalOpen(false)
    setViewCategoryModalOpen(false)
    setViewCategoryModalOpen1(false)
  };
  const handleShowDeleteConfirmModal = (selectedMealId) => {
    setSelectedCategoryId(selectedMealId)
    setShowDeleteConfirmModal(true);
    setAddCategoryModalOpen(false);
    setAddMealCategoryModalOpen(false)
    setViewCategoryModalOpen(false)
    setViewCategoryModalOpen1(false)
  };

  const handleCloseDeleteConfirmModal = (selectedMealId) => {
    setSelectedCategoryId(selectedMealId)
    setShowDeleteConfirmModal(false);
    setSelectedRestaurantId(null);
    setAddCategoryModalOpen(false);
    setAddMealCategoryModalOpen(false)
    setViewCategoryModalOpen(false)
    setViewCategoryModalOpen1(false)
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { restaurantId, restaurantBranch } = user;
    if (role !== 'superAdmin') {
      setRestaurantId(restaurantId);
      setRestaurantBranch(restaurantBranch);
    }
    if (error) {
      // alert('error');
      setAlert({ message: "An error occured!", type: 'error' });

    }
  }, [error]);
  useEffect(() => {
    fetchDietaryCategories();
    fetchMealCategories1();
    fetchCategories();
    if (role === 'superAdmin') {
      axios
        .get('/api/restaurant/get')
        .then((response) => setRestaurantBranch(response.data.data))
        .catch((error) =>
          console.error('Error fetching restaurant branches:', error)
        );
    }
  }, []);
  useEffect(() => {
    // Update selected restaurantId based on the selectedBranch
    if (role === 'superAdmin') {
      const selectedBranchObject = restaurantBranch.find(
        (branch) => branch.restaurantBranch === selectedBranch
      );

      if (selectedBranchObject) {
        setSelectedRestaurantId(selectedBranchObject.restaurantId);
      }
    }
  }, [selectedBranch, restaurantBranch]);

  return (
    <div className=" bg-white py-1 text-white">
      <div className="container-fluid bg-white text-black my-5">
        <Card className='Cardimg123 bg-white' >
        
          <div className="my-5 text-black bg-white" >
            <form
              onSubmit={submitHandler}
              className="address-container"
              encType="multipart/form-data"
            >
              <h4 className="mb-5 uppercase mx-5">Add a new Menu Item</h4>
              <div className="row">
                <div className="col-xs-12 col-lg-6 col-md-12">
                  <div className="mb-4 mx-5">
                    <label htmlFor="name_field">
                      Name
                      <span className="text-danger">
                        {' '}
                        <b>*</b>
                      </span>
                    </label>
                    <input
                      style={{ backgroundColor: 'white', color: 'black' }}
                      type="text"
                      id="name_field"
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                      placeholder="Field is required"
                    />
                  </div>

                  <div className="mb-4 mx-5">
                    <label htmlFor="price_field">
                      Price
                      <span className="text-danger">
                        {' '}
                        <b>*</b>
                      </span>
                    </label>
                    <input
                      style={{ backgroundColor: 'white', color: 'black' }}
                      type="number"
                      id="price_field"
                      required
                      placeholder="Field is required"
                      className={`form-control `}
                      onChange={(e) =>{ 
                        const value = e.target.value;
                        if (value >= 0) { 
                          setPrice(e.target.value)
                        }
                      } }
                        value={price}
                      step="any"
                    />
                  </div>

                  <div className="mb-4 mx-5">
                    <label htmlFor="description_field">
                      Description
                      <span className="text-danger">
                        {' '}
                        <b>*</b>
                      </span>
                    </label>
                    <textarea
                      style={{ backgroundColor: 'white', color: 'black' }}
                      className="form-control"
                      id="description_field"
                      rows="2"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      required
                      placeholder="Field is required"
                    />
                  </div>
                  <div className="mb-4 mx-5">
                    <label htmlFor="category_field">
                      Meal Category
                      <span className="text-danger">
                        {' '}
                        <b>*</b>
                      </span>
                      <span onClick={handleAddMealCategoryClick}>
                        (Add Category)
                        <FontAwesomeIcon
                          icon={faPencilAlt}
                          style={{ marginRight: '5px' }}
                        />
                      </span>
                    </label>
                    <select
                      style={{ backgroundColor: 'white', color: 'black' }}
                      onChange={(e) => setMealTypeCategory(e.target.value)}
                      className="form-select"
                      id="category_field"
                      required
                    >
                      <option value="">Select</option>
                      {mealCategories.map((mealType) => (
                        <option
                          style={{ backgroundColor: 'white', color: 'black' }}
                          key={mealType.mealTypeCategory}
                          value={mealType.mealTypeCategory}
                        >
                          {mealType.mealTypeCategory}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4 mx-5">
                    <label htmlFor="dietary_category_field">
                      Dietary Category
                      <span className="text-danger">
                        {' '}
                        <b>*</b>
                      </span>
                      <span onClick={handleAddCategoryClick}>
                        (Add Category)
                        <FontAwesomeIcon
                          icon={faPencilAlt}
                          style={{ marginRight: '5px' }}
                        />
                      </span>
                    </label>
                    <select
                      style={{ backgroundColor: 'white', color: 'black' }}
                      onChange={(e) =>
                        setDietaryPreferenceCategory(e.target.value)
                      }
                      className="form-select"
                      id="dietary_category_field"
                      required
                    >
                      <option value="">Select</option>
                      {dietaryCategories.map((mealType) => (
                        <option
                          key={mealType.dietaryPreferenceCategory}
                          value={mealType.dietaryPreferenceCategory}
                        >
                          {mealType.dietaryPreferenceCategory}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-xs-12 col-lg-6 col-md-12">
                  <>
                    {role === 'superAdmin' &&
                      Array.isArray(restaurantBranch) && (
                        <div className="mb-4 mx-5">
                          <label htmlFor="seller_field">
                            Restaurant Branch
                            <span className="text-danger">
                              {' '}
                              <b>*</b>
                            </span>
                          </label>
                          <select
                            style={{
                              backgroundColor: 'white',
                              color: 'black'
                            }}
                            id="seller_field"
                            className="form-select"
                            value={selectedBranch} // Use a separate state for selected value
                            onChange={(e) => setSelectedBranch(e.target.value)}
                            required
                          >
                            <option value="">Select</option>
                            {restaurantBranch.map((branch) => (
                              <option
                                key={branch.restaurantBranch}
                                value={branch.restaurantBranch}
                              >
                                {branch.restaurantBranch}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    <div className="mb-4 mx-5 d-none">
                      <label htmlFor="id_field">
                        Restaurant Id
                        <span className="text-danger">
                          {' '}
                          <b>*</b>
                        </span>
                      </label>
                      <input
                        style={{ backgroundColor: 'white', color: 'black' }}
                        type="text"
                        id="id_field"
                        className="form-control"
                        // onChange={() => setRestaurantId(selectedRestaurantId)}
                        // value={selectedRestaurantId}
                        // required
                        placeholder="Field is required"
                      />
                    </div>
                  </>

                  <div className="mb-4 mx-5">
                    <label htmlFor="customFile">Images</label>

                    <div className="custom-file">
                      <input
                        style={{ backgroundColor: 'white', color: 'black' }}
                        type="file"
                        name="product_images"
                        className="form-control"
                        id="customFile"
                        multiple
                        onChange={onImagesChange}
                      />

                      <label className="custom-file-label" htmlFor="customFile">
                        Chosen Image
                      </label>
                    </div>

                    <div className="image-preview mt-3">
                      {imagesPreview.map((image, index) => (
                        <img
                          className="mr-2 mb-2"
                          key={index}
                          src={image}
                          alt={`Image Preview ${index + 1}`}
                          width="55"
                          height="52"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 mx-5">
                    <label
                      htmlFor="vegetarian_checkbox"
                      style={{ color: 'black', fontSize: '1rem' }}
                    >
                      Is Available
                    </label>
                    <div className="my-2">
                      <input
                        type="checkbox"
                        id="vegetarian_checkbox"
                        checked={isAvailable}
                        onChange={handleCheckboxChange}
                        className="custom-checkbox form-control"
                        style={{
                          display: 'none' // Hide default checkbox
                        }}
                      />
                      <label
                        htmlFor="vegetarian_checkbox"
                        style={{
                          marginTop: '5px',
                          borderRadius: '50%', // Make it round
                          width: '20px', // Adjust the size as needed
                          height: '20px', // Adjust the size as needed
                          cursor: 'pointer',
                          border: '1px solid #333',
                          display: 'inline-block',
                          position: 'relative',
                          backgroundColor: isAvailable ? '#4caf50' : '#fff' // Green background for checked state
                        }}
                      >
                        {isAvailable && (
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{
                              color: '#fff',
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)'
                            }}
                          />
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="mb-4 p-5">
                    <button
                      id="login_button"
                      type="submit"
                      disabled={loading}
                      className="btn my-3 px-4 btn rounded px-5 mx-5"
                    >
                      CREATE
                    </button>
                    <Link to="/admin/menus" className="btn my-3 px-4 btn rounded my-4">
                Back
              </Link>
                  </div>
                </div>
              </div>
            </form>
           
          </div>
        </Card>
        {alert.message && (
        <CustomAlert message={alert.message} type={alert.type} onClose={handleCloseAlert} />
      )}
      </div>
      <Modal
        show={isAddMealCategoryModalOpen}
        onHide={handleAddMealCategoryClick}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Meal Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="newMealCategoryName">
            <Form.Label>Meal Category Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter meal category name"
              value={newMealCategoryName}
              onChange={(e) => setNewMealCategoryName(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
        <Button
                  variant="outline-primary"
                  className="mt-2 ms-2"
                  onClick={handleViewAllCategories1}
                >
                  View All Categories
                </Button>
          <Button variant="secondary" onClick={handleAddMealCategoryClick}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveMealCategory}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={isAddCategoryModalOpen} onHide={handleAddCategoryClick} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Dietary Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="newCategoryName">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category name"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
              <Button
                  variant="outline-primary"
                  className="mt-2 ms-2"
                  onClick={handleViewAllCategories}
                >
                  View All Categories
                </Button>
          <Button variant="secondary" onClick={handleAddCategoryClick}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveCategory}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={viewCategoryModalOpen1}
        onHide={() => setViewCategoryModalOpen1(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>View All Dietary Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CategoryList
            categories={categories}
            onDeleteCategory={handleShowDeleteConfirmModal}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setViewCategoryModalOpen1(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={viewCategoryModalOpen}
        onHide={() => setViewCategoryModalOpen(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>View All Meal Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CategoryList1
            categories={categories}
            onDeleteCategory1={handleShowDeleteConfirmModal1}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setViewCategoryModalOpen(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showDeleteConfirmModal1}
        onHide={handleCloseDeleteConfirmModal}
        centered
      >
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
          <Button variant="danger" onClick={handleDeleteCategory1}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showDeleteConfirmModal}
        onHide={handleCloseDeleteConfirmModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteConfirmModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteCategory}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
}
