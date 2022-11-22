import React from 'react';

class Jumbotron extends React.Component {
    render(){
        return(
            <div>
                <div className="jumbotron">
        <div className="jumbotron-left">
            <div className="social">
                <ul>
                    <li>Github</li>
                    <li>Linkedin</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div className="line">
            </div>
        </div>
        <div className="main-jumbotron">
            <div className="greeting">
                <p>Hi, I'm </p>
                <h1><span style={{ color: '#80ac7b'}}>Fauzan Naufal I. D.</span></h1>
                <h2>Web Developer</h2>
            </div>
            <div className="description">
                <p>
                    I'm a web developer from Indonesia. I have a passion for web development and I'm always looking for new challenges.
                </p>
            </div>
            <div id="btn">
                <button id="btn-real">
                    <a href="#abt" style={{ textDecoration: 'none', color: '#80ac7b' }}>Find Out More</a>
                </button>
            </div>
        </div>
        <div className="jumbotron-right">
            <div className="email">
                <a href="mailto:fdhuha17@gmail.com" style={{textDecoration: 'none', color: '#80AC7B'}}>fdhuha17@gmail.com</a>
            </div>
            <div className="line">
            </div>
        </div>
    </div>
            </div>
        )
    }
}

export default Jumbotron;