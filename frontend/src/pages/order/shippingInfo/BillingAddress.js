/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import './index.css';
import { Card } from 'react-bootstrap';

const BillingAddress = ({
  streetAddress,
  postalCode,
  city,
  postal_code,
  state,
  country,
  // orderType,
  handleStreetAddressChange,
  handleZipCodeChange,
  handleCityChange,
  // handleBillingAddressChange,
  handleStateChange
  // handleCountryChange
}) => {
  useEffect(() => {
    const billingAddress = {
      streetAddress,
      postalCode: postalCode || postal_code,
      city,
      state,
      country
    };
    localStorage.setItem('billingAddress', JSON.stringify(billingAddress));
  }, [streetAddress, postalCode, postal_code, city, state, country]);

  return (
    <Card className="my-3 p-3 bg-transparent">
      <h4 id="CardText">Billing Address</h4>
      <div className="mb-3 address-container">
        <label
          htmlFor="streetAddress"
          className="form-label"
          id="CardText"
          style={{ color: 'black', backgroundColor: 'transparent' }}
        >
          Street Address{' '}
          <span className="text-danger">
            {' '}
            <b>*</b>
          </span>
        </label>
        <input
          style={{ color: 'black', backgroundColor: 'white' }}
          type="text"
          className={`form-control `}
          id="streetAddress"
          value={streetAddress}
          onChange={handleStreetAddressChange}
          required
          placeholder="Field is required"
        />
      </div>
      <div className="mb-3 address-container">
        <label id="CardText" htmlFor="zipCode" className="form-label">
          ZIP Code{' '}
          <span className="text-danger">
            {' '}
            <b>*</b>
          </span>
        </label>
        <input
          style={{ color: 'black', backgroundColor: 'white' }}
          type="text"
          className={`form-control `}
          id="zipCode"
          value={postalCode}
          onChange={handleZipCodeChange}
          required
          placeholder="Field is required"
        />
      </div>
      <div className="mb-3 address-container">
        <label id="CardText" htmlFor="city" className="form-label">
          City{' '}
          <span className="text-danger">
            {' '}
            <b>*</b>
          </span>
        </label>
        <input
          style={{ color: 'black', backgroundColor: 'white' }}
          type="text"
          className={`form-control `}
          id="city"
          value={city}
          onChange={handleCityChange}
          required
          placeholder="Field is required"
        />
      </div>
      <div className="mb-3 address-container">
        <label htmlFor="state" id="CardText" className="form-label">
          State{' '}
          <span className="text-danger">
            {' '}
            <b>*</b>
          </span>
        </label>
        <input
          style={{ color: 'black', backgroundColor: 'white' }}
          type="text"
          className={`form-control `}
          id="state"
          value={state}
          onChange={handleStateChange}
          required
          placeholder="Field is required"
        />
      </div>
      <div className="mb-3 address-container">
        <label htmlFor="state" id="CardText" className="form-label">
          Country{' '}
          <span className="text-danger">
            {' '}
            <b>*</b>
          </span>
        </label>
        <input
          style={{ color: 'black', backgroundColor: 'white' }}
          type="text"
          className={`form-control `}
          id="country"
          value={country}
          // onChange={handleCountryChange}
          required
          disabled
          placeholder="Field is required"
        />
        {/* {orderType === 'Pickup' && (
          <div>
            <Button
              className="mt-2 my-global-button"
              onClick={handleBillingAddressChange}
            >
              Check Address
            </Button>
          </div>
        )} */}
      </div>
    </Card>
  );
};

export default BillingAddress;