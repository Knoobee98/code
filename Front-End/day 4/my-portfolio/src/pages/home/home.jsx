import React from 'react';
import List from './../../components/list.jsx';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{color: 'red'}}>Home</h1>
        <br />
        <h2 className="home-h1">student list</h2>
        <ul>
            <List data={{name: 'Fauzan', umur: '12'}}/>
            <List data={{name: 'Naufal', umur: '17'}}/>
            <List data={{name: 'Ihsan', umur: '19'}}/>
            <List data={{name: 'Dhuha', umur: '24'}}/>
        </ul>
        <Link to="/profile">Profile</Link>
      </div>
    );
  }
}

export default Home;