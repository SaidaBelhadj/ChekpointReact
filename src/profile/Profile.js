import React from 'react'
import PropTypes from 'prop-types';
// import { Image } from './Image'

const  setStyleInfo = {
  color : 'rgb(255, 0, 255)' ,
  fontFamily: 'Monserrat, sans-serif',
  fontSize : '25px'
}
const styleCh = {
  color : 'brown',
  fontSize : '25px'
};
const linkCv= "https://drive.google.com/file/d/1YbSRq_uUoxEvsQ4T8DP77TxZYgSuNiiX/view?usp=sharing";
const  setStyleGreen = {color : 'green',  textAlign: 'left', marginLeft:100  }
const styleBtn ={ borderRadius: '12px', padding: '14px 40px',align : 'center',  
 fontSize: '20px', 
backgrounColor: 'white',
color: 'black',
border: '2px solid #4CAF50'}


function Profile (props) {
  function handleName (e) {
    e.preventDefault();
    alert(props.name)
    };

    return (
        <div>
        <h2> <span style={setStyleInfo}>My Fullname is : </span><span >{props.name}</span> </h2>  
        <h2> <span style={setStyleInfo}>My Profession is : </span><span>  {props.profession}</span></h2> 
         <img  src={props.children} alt = 'test' className='rounded-circle'/> 
          <h2 style={setStyleGreen}>My Biography</h2>
          <div className="profileBio">
            <ul style = {{listStyleType: 'none',margin: 0,padding: 0,color: 'purple' ,fontSize : '15px'}}>
              <li><span className= 'login-text' > Email: {props.email} </span></li>
              <li><span className= 'login-text'> Phone: {props.phone} </span></li>
              <li><span className= 'login-text' > Birthdate: {props.dob}</span></li>
            </ul>
            <span className= 'login-text'>
            <a  style = {styleCh} href={linkCv}  onClick={props.hClick}>Click to see my CV </a>  
            </span>
          
         </div>

         
           <br/> <br/>
          <button className = 'btn-grad' onClick={handleName}>Click Me! </button> 
         
          
          </div>
    )
};

Profile.propTypes = {
       name: PropTypes.string.isRequired
  }
// Set default props
Profile.defaultProps = {
  name: "Some thing is required!",
  profession: "Some thing is required!",
  email: "Some thing is required!",
  phone: "Some thing is required!",
  dob: "Some thing is required!"
 };

export default Profile;
