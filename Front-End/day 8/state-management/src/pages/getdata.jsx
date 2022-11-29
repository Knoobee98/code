import {connect} from 'react-redux';
import {FetchApi} from './../redux/actions/dataAction';
import {useEffect} from 'react';


function GetData({FetchApi, dataComponent}) {
    useEffect(() => {
        FetchApi()
    }, [FetchApi]);

    return (
        <div>
            <h1>Get Data pages</h1>
            <h6>
                {dataComponent.message? dataComponent.message : null}
            </h6>
            {
                dataComponent.data.map((value, index) => {
                    return(
                        <div key={index}>
                            <p>{value.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        dataComponent: state.dataReducer
    }
}

const mapDispatchToProps = {
        FetchApi
}

export default connect(mapStateToProps, mapDispatchToProps)(GetData);