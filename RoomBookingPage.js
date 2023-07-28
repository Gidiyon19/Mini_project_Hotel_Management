import React, { useState } from 'react';
import './RoomBookingPage.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const RoomBookingPage = () => {
  const [name, setName] = useState('');
  const [roomType, setRoomType] = useState('Single');
  const [numRooms, setNumRooms] = useState(1);
  const [numPersons, setNumPersons] = useState(1);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && checkInDate && checkOutDate) {
      if (roomType === 'Single' || roomType === 'Double' || roomType === 'Suite') {
        // Here you can handle the booking information and submit it to a server or store it locally.
        alert('Booking submitted successfully!');
        setName('');
        setRoomType('Single');
        setNumRooms(1);
        setNumPersons(1);
        setCheckInDate('');
        setCheckOutDate('');
      } else {
        alert('Please select a valid room type.');
      }
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  const handleNumRoomsChange = (e) => {
    setNumRooms(e.target.value);
  };

  return (
    <body className='ney'>
    <div className="room-booking-page">
      <div className='messi'>Book Now</div>
      <div className="form1-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <label htmlFor="roomType">Room Type:</label>
          <select
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="Single">Child</option>
            <option value="Double">Master</option>
            <option value="Suite">Guest</option>
          </select>

          <label htmlFor="numRooms">Number of Rooms:</label>
          <select id="numRooms" value={numRooms} onChange={handleNumRoomsChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>

          <label htmlFor="numPersons">Number of Persons:</label>
          <input
            type="number"
            id="numPersons"
            value={numPersons}
            onChange={(e) => setNumPersons(e.target.value)}
            min="1"
          />

          <label htmlFor="checkInDate">Check-In Date:</label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />

          <label htmlFor="checkOutDate">Check-Out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />

          <Link to="/Payment">
            <div className='messi'><button type="submit">Book</button></div>
          </Link>
        </form>
      </div>
    </div>
    </body>
  );
};

export default RoomBookingPage;
