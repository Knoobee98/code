import React from 'react';

let num = 100;
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>This is home pages
        {num >= 100 ? 'true' : 'false'}
        </h1>
        
      </div>
    );
  }
}

export default Home;