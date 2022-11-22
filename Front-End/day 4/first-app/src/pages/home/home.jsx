import React from 'react';
import List from './../../components/list';
import './home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className="home-h1" style={{ color: 'green'}}>
            student list
        </h1>
        <ul>
            <List data={{name: 'stephen', umur: '17'}}/>
            <List data={{name: 'gilang', umur: '19'}}/>
            <List data={{name: 'vero', umur: '24'}}/>
        </ul>
      </div>
    );
  }
}

export default Home;