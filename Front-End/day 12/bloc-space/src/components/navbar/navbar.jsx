import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <div className="flex justify-between items-center bg-green-200 border border-slate-300 py-4 px-5">
            <div>
                <Link to="/landingPage">Logo</Link>
            </div>
            <div className="flex">
                {/* <div className="mr-4">
                    <Link to='/login'>
                    <button className="px-6 py-2 bg-green-500 border border-slate-200 rounded-full ">Login</button>
                    </Link>
                </div> */}
                <div>
                    <Link to="/register">
                    <button className="px-6 py-2 bg-green-500 border border-slate-200 rounded-full">Join us?</button>        
                    </Link>
                </div>
            </div>
        </div>
    )
}
