import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import logo from '../../uploads/symbios-logo.png'
// import cart from '../../uploads/cart2.png'
import { useNavigate } from 'react-router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Dashboard = ({ fixed }) => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const navigate = useNavigate()
    return (
        <>
            <div className='px-6 py-2'>
                <nav className='relative flex flex-wrap items-center justify-between px-2 bg-white border-gray-100 border-2 mb-3'>
                    <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
                        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                            <img src='' alt='logo' />
                            <button className='text-gray-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                                type='button'
                                onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                <MoreHorizIcon fontSize='large' /></button>
                        </div>
                        <div className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? "flex" : "hidden")
                        }
                            id="example-navbar-danger"
                        >
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                <li className="nav-item">
                                    <button className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75' onClick={() => navigate('/addproduct')}>
                                        <i className="text-lg leading-lg text-gray-800 opacity-75"></i><span className="ml-2">Product</span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75"
                                        href="a"
                                    >
                                        <i className="text-lg leading-lg text-gray-800 opacity-75"></i><span className="ml-2"><img className='border-2 border-red-500 py-2 px-2' src='' alt='cart' /></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='bg-gray-200'>
                <div className='bg-gray-200 flex flex-row py-6 px-3'>
                    {/* <FontAwesomeIcon icon="fa-solid fa-basket-shopping" /> */}
                    <ShoppingBagOutlinedIcon sx={{ fontSize: 40 }} />
                </div>

            </div>
        </>
    )
};

export default Dashboard;
