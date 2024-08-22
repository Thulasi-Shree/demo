import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import CustomAlert from 'components/utilities/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [alert, setAlert] = useState({ message: '', type: '' });
  const [show, setShow] = useState(false); // To control the modal

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseAlert = () => {
    setAlert({ message: '', type: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.querySelector('#contact').disabled = true;
    try {
      const response = await axios.post('api/send-email', formData);
      console.log(response);

      setAlert({ message: 'Email sent successfully!', type: 'success' });
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });

          
      // Re-enable the submit button
      document.querySelector('#contact').disabled = false;
    } catch (error) {
      setAlert({ message: 'Error sending email!', type: 'error' });
      document.querySelector('#contact').disabled = false;
    }
  };

  return (
    <div className='mx-auto address-container'>
      <Button variant="primary" onClick={handleShow}>
        Contact Us
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {alert.message && (
            <CustomAlert message={alert.message} type={alert.type} onClose={handleCloseAlert} />
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Label>Full Name <span className="text-danger"> <b>*</b> </span></Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Field is required"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address <span className="text-danger"> <b>*</b> </span></Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Field is required"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject <span className="text-danger"> <b>*</b> </span></Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Field is required"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message <span className="text-danger"> <b>*</b> </span></Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Field is required"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" id="contact">
              Send
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactUs;
