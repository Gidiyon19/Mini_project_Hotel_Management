

import './App.css';
// import Login from './Login';
import React from 'react';
import Main from './Main';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Register from './Register';
// import Navigation from './Navigation';
import About from './About';
import Menu from './Menu';
import Flights from './Flights';
import ReviewPage from './ReviewPage';
import Room from './Room';
// import Signup from './Signup';
import Payment from './Payment';
// import User from './User';
import SigninPage from './SigninPage';
import SignupPage from './SignupPage';
import User from './User';
// import Adminmain from './Adminmain';
// import Get from './Get';
// import Post from './Post';
// import Del from './Del';
// import Update from './Update';
// import Home from './Home';
// import BookList from "./components/Book/BookList";
// import BookDetails from "./components/BookDetails/BookDetails";
import AdminPage from './AdminPage';
import Feedback from './Feedback';
import RoomBooking from './RoomBooking';
import PhotoCollage from './PhotoCollage';
import RoomBookingPage from './RoomBookingPage';
import Popupbox from './Popupbox';
// import SearchForm from './SearchForm';
// import BookHotels from './BookHotels';
// import Empdet from './Empdet';
// import Around from './Around';
// import PaymentForm from './PaymentForm';

function App() {
  return (
    
    <Router>
      <div className='App'>
      <Routes>
        <Route exact path="/"element={<SigninPage/>}/> 
        <Route path="/SignupPage"element={<SignupPage/>}/>
        <Route path="/Main"element={<Main/>}/>
        <Route path="/Main/Flights"element={<Flights/>}/>
        {/* <Route path="/Login"element={<Login/>}/> */}
        {/* <Route path="/Signup"element={<Signup/>}/> */}
        <Route path="/SigninPage"element={<SigninPage/>}/>
        <Route path="/Register"element={<Register/>}/>
        <Route path="/Main/About"element={<About/>}/>
        {/* <Route path="/User"element={<User/>}/> */}
        <Route path="/AdminPage"element={<AdminPage/>}/>
        <Route path="/Main/Menu"element={<Menu/>}/>
        <Route path="/Main/ReviewPage"element={<ReviewPage/>}/>
        <Route path="/Flights"element={<Flights/>}/>
        <Route path="/Main/Room"element={<Room/>}/>
        <Route path="/Main/Payment"element={<Payment/>}/>
        <Route path="/Main/Feedback"element={<Feedback/>}/>
        <Route path="/User"element={<User/>}/>
        <Route path="/Main/Room/RoomBooking"element={<RoomBooking/>}/>
        <Route path="/Main/PhotoCollage"element={<PhotoCollage/>}/>
        <Route path="/Main/Room/RoomBookingPage"element={<RoomBookingPage/>}/>
        <Route path="/Payment"element={<Payment/>}/>
        <Route path="/Popupbox"element={<Popupbox/>}/>
        {/* <Route path="/SearchForm"element={<SearchForm/>}/> */}
        {/* <Route path="/BookDetails"element={<BookDetails/>}/> */}
        {/* <Route path="/Main/Menu/BookHotels"element={<BookHotels/>}/> */}
        {/* <Route path="/Adminmain"element={<Adminmain/>}/> */}
        {/* <Route path="/Post"element={<Post/>}/>
        <Route path="/Del"element={<Del/>}/>
        <Route path="/Update"element={<Update/>}/>
        <Route path="/Home"element={<Home/>}/> */}
        {/* <Route path="/Around"element={<Around/>}/> */}
      </Routes>
      </div>
    </Router>
  );
}
export default App;








