import React from 'react'
import user from '../../assets/images/user.png';
const Header = () => {
  return (
    <div className='header'>
        <h4 className='text-white'>
            ERP-System
        </h4>
        <div>
            <img src={user} className='w-40px rounded' />
            <span className='m-1 text-white'>User</span>
        </div>
    </div>
  )
}

export default Header