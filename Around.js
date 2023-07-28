
import './Empdet.css'
import React, { Component } from "react";
// import Sidebar from "../components/sidebar";
import axios from 'axios';
class Around extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.post('http://localhost:8081/p')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <>
        {/* <Sidebar/> */}
        <center>
      <table border={1}>
      <thead>
        <tr>
          <th>Emp Id</th>
          <th>Emp Name</th>
          <th>Date Of Birth</th>
          <th>Email Id</th>
          <th>Password</th>
          <th>Gender</th>
          <th>Mobile No</th>
          <th>Address</th>
          
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.sno}>
            <td>{user.empid}</td>
            <td>{user.empname}</td>
            <td>{user.dob}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.genderl}</td>
            <td>{user.mobile}</td>
            <td>{user.address}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
    </center>
    </>
    );
  }}
  
export default Around;