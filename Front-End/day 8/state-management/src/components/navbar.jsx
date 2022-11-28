import {connect} from 'react-redux';

function Navbar({counter}) {
    return(
        <>
        <h1>navbar</h1>
        <p>
            {/* {counter.number} */}
        </p>
        <p>
            {counter.username}
        </p>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        counter: state.counter
    }
}

export default connect(mapStateToProps)(Navbar)