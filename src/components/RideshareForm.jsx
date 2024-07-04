// RideshareForm.jsx

import React from 'react';
import firebase from './FirebaseConfig.jsx'; // Import Firebase

const RideshareForm = () => {
  const handleSearchRideshare = () => {
    // Get the departure time from the input field (assuming you have an input field with id="departure-time")
    const departureTime = document.getElementById('departure-time').value;

    // Add the departure time to the database
    const database = firebase.database();
    database.ref('departureTimes').push(departureTime)
      .then(() => {
        console.log('Departure time added to database successfully');
      })
      .catch(error => {
        console.error('Error adding departure time to database:', error);
      });
  };

  return (
    <div>
      <label htmlFor="departure-time">Departure Time:</label>
      <input type="time" id="departure-time" name="departure-time" required />
      <button onClick={handleSearchRideshare}>Search Rideshare</button>
    </div>
  );
};

export default RideshareForm;
