import React from 'react';

class List extends React.Component {
    render() {
        return (
            <div>
                <li>{`${this.props.data.name}, ${this.props.data.umur} tahun`}</li>
            </div>
        );
    }
}

export default List;