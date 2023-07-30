import { useEffect, useState } from 'react'
import '../AccountRegister/AccountRegister.css'
import User from '../../assets/Account/User.svg'
import email from '../../assets/Account/Email.svg'
import Lockkey from '../../assets/Account/Lockkey.svg'
import { useNavigate } from "react-router-dom";
import useUser from '../../store/useUser'

const AccountRegister = () => {
  const [register, setRegister] = useState({
    username : "",
    email : "",
    password : "",
    repeat : ""
  })

  const [login, setLogin] = useState({
    email : "",
    password: ""
  })

  const navigate = useNavigate();

  const {user, registerRequest, loginRequest} = useUser();

  useEffect(() => {
    let overlay = document.getElementById("overlay");

    // Buttons to 'switch' the page
    let openSignUpButton = document.getElementById("slide-left-button");
    let openSignInButton = document.getElementById("slide-right-button");
    
    // The sidebars
    let leftText = document.getElementById("sign-in");
    let rightText = document.getElementById("sign-up");
    
    // The forms
    let accountForm = document.getElementById("sign-in-info")
    let signinForm = document.getElementById("sign-up-info");
    
    // Open the Sign Up page
    const openSignUp = () =>{
      // Remove classes so that animations can restart on the next 'switch'
      leftText.classList.remove("overlay-text-left-animation-out");
      overlay.classList.remove("open-sign-in");
      rightText.classList.remove("overlay-text-right-animation");
      // Add classes for animations
      accountForm.className += " form-left-slide-out"
      rightText.className += " overlay-text-right-animation-out";
      overlay.className += " open-sign-up";
      leftText.className += " overlay-text-left-animation";
      // hide the sign up form once it is out of view
      setTimeout(function(){
        accountForm.classList.remove("form-left-slide-in");
        accountForm.style.display = "none";
        accountForm.classList.remove("form-left-slide-out");
      }, 700);
      // display the sign in form once the overlay begins moving right
      setTimeout(function(){
        signinForm.style.display = "flex";
        signinForm.classList += " form-right-slide-in";
      }, 200);
    }
    
    // Open the Sign In page
    const openSignIn = () =>{
      // Remove classes so that animations can restart on the next 'switch'
      leftText.classList.remove("overlay-text-left-animation");
      overlay.classList.remove("open-sign-up");
      rightText.classList.remove("overlay-text-right-animation-out");
      // Add classes for animations
      signinForm.classList += " form-right-slide-out";
      leftText.className += " overlay-text-left-animation-out";
      overlay.className += " open-sign-in";
      rightText.className += " overlay-text-right-animation";
      // hide the sign in form once it is out of view
      setTimeout(function(){
        signinForm.classList.remove("form-right-slide-in")
        signinForm.style.display = "none";
        signinForm.classList.remove("form-right-slide-out")
      },700);
      // display the sign up form once the overlay begins moving left
      setTimeout(function(){
        accountForm.style.display = "flex";
        accountForm.classList += " form-left-slide-in";
      },200);
    }
    
    // When a 'switch' button is pressed, switch page
    openSignUpButton.addEventListener("click", openSignUp, false);
    openSignInButton.addEventListener("click", openSignIn, false);
  },[])

  const handleChange = e => {
    const name = e.target.name;
    setRegister(prev => ({...prev, [name] : e.target.value}))
  }

  const handleRegister = e => {
    e.preventDefault();
    registerRequest(register);
  }
  const handleLoginChange = e => {
    const name = e.target.name;
    setLogin(prev => ({...prev, [name] : e.target.value}))
  }
  const handleLogin = e => {
    e.preventDefault();
    loginRequest(login);
    if(user) {
      navigate("/")
    }
  }

  return (
    <div>
    <div className="container">
  <div className="overlay" id="overlay">
    <div className="sign-in" id="sign-in">
      <h1>Welcome Back!</h1>
      <p>To keep connected with us please login with your personal info</p>
      <button className="switch-button" id="slide-right-button">Sign In</button>
    </div>
    <div className="sign-up" id="sign-up">
      <h1>Hello, Friend!</h1>
      <p>Enter your personal details and start a journey with us</p>
      <button className="switch-button" id="slide-left-button">Sign Up</button>
    </div>
  </div>
  <div className="form">
    <div className="sign-in" id="sign-in-info">
      <h1>Sign In</h1>
      <form id="sign-in-form" onSubmit={handleLogin}>      
        <div className='input-icon'>
          <img src={email} alt="" />
          <input type="email" name="email" value={login.email} onChange={handleLoginChange} placeholder="Email"/>
        </div>
        <div className='input-icon'>
          <img src={Lockkey} alt="" />
          <input type="password" name="password" value={login.password} onChange={handleLoginChange} placeholder="Password"/>
        </div>
          <p className="forgot-password">Forgot your password?</p>
          <button className="control-button in">Sign In</button>
      </form>
    </div>

    <div className="sign-up" id="sign-up-info">
      <h2>Create Account</h2>
      <p>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
      <form id="sign-up-form" onSubmit={handleRegister}>
        <div className='input-icon'>
          <img src={User} alt="" />
        <input type="text" name="username" value={register.username} onChange = {handleChange} placeholder="Name" required/>
        </div>
        <div className='input-icon'>      
          <img src={email} alt="" />
         <input type="email" name="email" value={register.email} onChange = {handleChange} placeholder="Email" required/>
        </div>
        <div className='input-icon'>
        <img src={Lockkey} alt="" />
        <input type="password" name="password" value={register.password} onChange = {handleChange} placeholder="Password" required/>
        </div>
        <div className='input-icon'>
        <img src={Lockkey} alt="" />
        <input type="password" name="repeat" value={register.repeat} onChange = {handleChange} placeholder="Confirm Password" required/>
        </div>
        <button className="control-button up" onClick={handleRegister}>Create Account</button>
      </form>
    </div>

  </div>
</div>
</div>
  )
}

export default AccountRegister;