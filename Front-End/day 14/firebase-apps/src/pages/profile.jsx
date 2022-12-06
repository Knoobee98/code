import {Link} from 'react-router-dom'

export default function Profile(){
    return(
        <div>
            <h1>User Profiles</h1>
            <h5>
                <Link to='/'>go to home</Link>
            </h5>
        </div>
    )
}