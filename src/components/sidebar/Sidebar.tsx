import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    const path = window.location.pathname;
    return (
        <div className='links'>
            <Link className={`${path === '/color-master' ? 'active' : ''}`} to="/color-master">Color Master</Link>
            <Link className={`${path === '/hsn' ? 'active' : ''}`} to="/hsn">HSN</Link>
            <Link className={`${path === '/gst' ? 'active' : ''}`} to="/gst">GST Manager</Link>
            <Link className={`${path === '/product' ? 'active' : ''}`} to="/product">Product Manager</Link>
        </div>
    )
}
