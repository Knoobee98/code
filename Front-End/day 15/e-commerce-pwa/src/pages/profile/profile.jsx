import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
    render(){
        return(
            <div>
                <h1>Profile</h1>
                <br />
                <br />
                <Link to='/'>
                    <button>
                        menuju home
                    </button>
                </Link>
            </div>
        )
    }
}


export default Profile;