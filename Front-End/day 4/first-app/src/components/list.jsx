import react from 'react';

class List extends react.Component{
    render(){
        return(
            <li style={{ color: 'blue'}}>
                {`${this.props.data.name}, ${this.props.data.umur} tahun`}
            </li>
        )
    }
}

export default List;