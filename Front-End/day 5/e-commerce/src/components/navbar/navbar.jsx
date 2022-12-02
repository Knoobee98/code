import "./navbar.css";

import { MdLocationOn } from "react-icons/md";

import {CgProfile} from 'react-icons/cg';

import { useLocation, Link } from "react-router-dom";

let Navbar = (props) => {
  const location = useLocation();
  return (
    <div>
            <div className='navbar flex px-10 w-100 justify-between'>
                <div className='flex items-center'>
                    <Link to='/'>
                        <img src="https://purwadhika.com/static/media/logopwdk-01.a09cf2fc.png" width='50px' height='50px' alt='logo' />
                    </Link>
                    {
                        location.pathname === '/register'?
                        null
                        :
                        <>
                            <span className='pl-10 font-bold'>
                                Cards 
                            </span>
                            <span className='pl-10 font-bold'>
                                <Link to='/menu'>
                                    Order    
                                </Link> 
                            </span>
                            <span className='pl-10 font-bold'>
                                Gift
                            </span>
                        </>
                    }
                </div>
                <div className='flex'>
                    {
                        location.pathname === '/register'?
                        null
                        :
                        <>
                            <div className='flex items-center'>
                                <MdLocationOn />
                                <span className='mr-10 font-bold'>
                                    Find a store
                                </span>
                            </div>
                            {
                                props.data.username?
                                    <div className='flex items-center'>
                                        <div className='font-bold'>
                                            {props.data.username} 
                                        </div>
                                        <div className='my-fs-20 mt-1 ml-1'>
                                            <CgProfile onClick={props.logout.onLogout} />
                                        </div>
                                    </div>
                                :
                                    <>
                                        <button className='my-bg-dark my-light rounded-full mr-3 px-3 py-2'>
                                            <Link to='/login'>
                                                Sign in
                                            </Link>
                                        </button>
                                        <button className='my-dark rounded-full px-3 py-2' style={{border: '1px solid black'}}>
                                            <Link to='/register'>
                                                Join now
                                            </Link>
                                        </button>
                                    </>
                            }
                        </>
                    }
                </div>
            </div>
        </div>
  );
};

export default Navbar;
