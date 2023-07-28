import React from 'react';
import './Room.css';
import './RoomBookingPage'
import { Link } from 'react-router-dom';
const offers = [
  {
    id: 1,
    title: 'The Taj Palace',
    description: 'Enjoy a relaxing summer vacation at our luxurious hotel.',
    imageUrl: 'https://www.travelandleisure.com/thmb/XqEZe9C9h7CevxYl9Jj-pT2IFZE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/oberoi-udaivilas-udaipur-01-INDIARESORTWB22-c8fc403a472544c4b9fbe6ab5e480640.jpg'
  },
  {
    id: 2,
    title: 'Wild Planet Resort',
    description: 'Affordable and comfortable for a pleasant stay.',
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/28507513.jpg?k=d834868843dd75631ad937891d0e01250889f364d673156f045b7748d5631672&o=&hp=1'
  },
  {
    id: 3,
    title: 'Evolve Back',
    description: 'Indulge in luxury with our exclusive penthouse suite.',
    imageUrl: 'https://www.theindia.co.in/blog/wp-content/uploads/2021/03/Evolve-Back.jpg'
  },
  {
    id: 4,
    title: 'Heritage Village Resort',
    description: 'Experience breathtaking views in our beachfront villa.',
    imageUrl: 'https://www.theindia.co.in/blog/wp-content/uploads/2021/03/Heritage-Village-Resort-Spa.jpeg'
  },
  {
    id: 5,
    title: 'Forest Canopy',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    imageUrl: 'https://www.theindia.co.in/blog/wp-content/uploads/2021/03/forest-canopy-resort.jpg'
  },
  {
    id: 6,
    title: ' Corbett The Baagh',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    imageUrl: 'https://www.theindia.co.in/blog/wp-content/uploads/2021/03/Corbett-The-Baagh-Spa-Resort.jpg'
  },
  
  {
    id: 7,
    title: ' The Fog Resort',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    imageUrl: 'https://www.theindia.co.in/blog/wp-content/uploads/2021/03/The-Fog-Resort-Spa.jpg'
  },
  
  {
    id: 8,
    title: 'The Oberoi Vanyavilas',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    imageUrl: 'https://www.travelandleisure.com/thmb/LMZ0h_gMyYY9J5KshqvPXmFPyPw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/oberoi-vanyavilas-wildlife-resort-02-INDIARESORTWB22-2ebe86b7c8bb4ee6a4bab121e84fe5a0.jpg'
  },
  
  
  
  
];

const Offers = () => {
  const handleViewClick = (offerId) => {
    // Implement the logic to handle the view button click for the corresponding offer
    console.log(`View clicked for offer with ID: ${offerId}`);
  };

  const handleSubmitClick = (offerId) => {
    // Implement the logic to handle the submit button click for the corresponding offer
    console.log(`Submit clicked for offer with ID: ${offerId}`);
  };

  return (
    <>
    <div className='backimg1'>
    <div className="offers-container">
      {offers.map(offer => (
        <div className="offer" key={offer.id}>
          <img className="offer-image" src={offer.imageUrl} alt={offer.title} />
          <h2 className="offer-title">{offer.title}</h2>
          <p className="offer-description">{offer.description}</p>
          <p className="offer-price">{offer.price}</p>
          <div className="offer-buttons">
            <Link to='RoomBooking'><button onClick={() => handleViewClick(offer.id)}>View</button></Link>
            <Link to='RoomBookingPage'><button onClick={() => handleSubmitClick(offer.id)}>Book</button></Link>

          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default Offers;