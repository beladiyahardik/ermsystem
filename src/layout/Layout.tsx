import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sidebar } from '../components/sidebar/Sidebar'

const Layout = ({ children }: any) => {
    const navigator = useNavigate();

    useEffect(() => {
        navigator('/color-master');
    }, [])

    return (
        <div className='layout'>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='main_content'>
                {children}
            </div>
        </div>
    )
}

export default Layout