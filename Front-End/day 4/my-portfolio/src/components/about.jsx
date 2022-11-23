import React from 'react';

import profile from './../assets/img/profile.jpg';

class About extends React.Component {
    render(){
        return(
            <div>
                <div className="about" id='abt'>
                    <div className="about-title">
                        <h1>1. About Me</h1>
                        <div className="line">
                    </div>
                </div>
                <div>
                    <p>Hello! My name is Fauzan and I enjoy creating things that live on the internet. My interest in web development started back in 2017 when I'm in college. when i'm bored of college, i started to make my own website.</p>
                </div>
                <div>
                    <img src={profile} alt='profile' width='50%' height='90%' />
                </div>
            </div>
                    </div>
        )
    }
}

export default About;