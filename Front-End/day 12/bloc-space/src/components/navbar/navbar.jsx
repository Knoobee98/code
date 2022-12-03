import {Link, useLocation} from 'react-router-dom';

export default function Navbar(){
    const location = useLocation();
    return(
        <div className="flex justify-between items-center bg-green-200 border border-slate-300 py-4 px-5 rounded-b-lg">
            <div>
                <Link to="/">Logo</Link>
            </div>
            <div className="flex">
            <div>
                {
                    location.pathname === "/register" || location.pathname === "/home" ? null :
                    <Link to="/register">
                    <button className="px-6 py-2 bg-green-500 border border-slate-200 rounded-full">Join us?</button>        
                    </Link>
                }
                    
                    </div>
            </div>
        </div>
    )
}
