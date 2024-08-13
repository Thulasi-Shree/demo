/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoryList1 = ({ categories, onDeleteCategory1 }) => {
  return (
    <div>
      <h4>All Categories</h4>
      {categories.length > 0 ? (
        <ul className="list-group">
          {categories.map((category) => (
            <li
              key={category._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {category.mealTypeCategory}
              <Button
                variant="danger"
                size="sm"
                onClick={() => onDeleteCategory1(category._id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
};
export default CategoryList1;
