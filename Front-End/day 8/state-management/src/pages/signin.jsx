import {useRef} from 'react';
import {connect} from 'react-redux';

//import actions
import {SetIncrement, SetDecrement, SetData} from './../redux/actions/counterAction';

function Signin({counter, SetIncrement, SetDecrement, SetData}){
    const username = useRef();
    const password = useRef();
    let onSubmit = () => {

        let inputUsername = username.current.value
        let inputPasssword = password.current.value
        SetData(inputUsername, inputPasssword)
    }

    return(
        <>
        {/* <h1>
            Sign in page
        </h1>
        <button onClick={SetIncrement}>setIncrement</button>
        <h3>
            {counter.number}
        </h3>
        
        <button disabled={counter.number === 0? true : false} onClick={SetDecrement}>setDecrement</button> */}
        <h1>Sign in page</h1>
        <input ref={username} type='text' placeholder='enter your name' />
        <input ref={password} type='password' placeholder='enter your password'/>
        <button onClick={onSubmit}>Submit</button>

        </>
    )
}

//untuk subscribe data dari redux state global
const mapStateToProps = (state) => {
    return{
        counter: state.counter
    }
}

//untuk triger action
const mapDispatchToProps = {
    SetIncrement,
    SetDecrement,
    SetData
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);