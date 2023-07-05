import React from 'react'
import '../AccountRegister/AccountRegister.css'
import images from '../../assets/Account.svg'

const AccountRegister = () => {
  return (
    <div className='content'>
      <div className='image-account'>
        <img src={images} alt=""/>
      </div>
      <div className='CreateAccount'>
        <div className='Text'>
          <h2>Create Account</h2>
          <p>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
        </div>
        <form action="">
          <input type="text" name="" id="" placeholder='Username'/>
          <input type="email" name="" id="" placeholder='Email Address'/>
          <input type="password" name="" id="" placeholder='PassWord'/>
          <input type="password" name="" id="" placeholder='Confirm Password'/>
          <input type="button" value="Create account" />
        </form>
      </div>
    </div>
  )
}

export default AccountRegister