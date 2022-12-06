import {Link} from 'react-router-dom';
import {Suspense, lazy, useState} from 'react';


const Form = lazy(() => import('./../components/forms'));

export default function Home(){
    const [isOpenForm, setIsOpenForm] = useState(false)

    let onPopuplogin = () => {
        setIsOpenForm(!isOpenForm);
    }
    return(
        <div>
            <h1>Home</h1>
            <button onClick={onPopuplogin}>
                login
            </button>
            {
                isOpenForm ? 
                <Suspense fallback={<div>Loading...</div>}>
                    <Form />
                </Suspense>
                :
                null
            }
            <h5>
                <Link to='/profile'>go to Profile</Link>
            </h5>
        </div>
    )
}