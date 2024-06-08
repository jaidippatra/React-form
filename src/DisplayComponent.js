import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css'

const DisplayComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state || {};

  return (
    <div className="container display-container">
      <h2>Submitted Data</h2>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Username:</strong> {formData.username}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Country:</strong> {formData.country}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>PAN No:</strong> {formData.panNo}</p>
      <p><strong>Aadhar No:</strong> {formData.aadharNo}</p>
      <button onClick={() => navigate('/')}>Go Back</button>
    </div>
  );
};

export default DisplayComponent;
