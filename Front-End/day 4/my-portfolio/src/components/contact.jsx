import React from 'react';

class Contact extends React.Component {
    render(){
        return(
            <div>
                <div className="contact">
                    <div className="contact-content">
                        <h1>4. do you have any question?</h1>
                        <div className="line"></div>
                        <h2>Contact Me</h2>
                        <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                        <div className="btn">
                            <button>
                                <a href="mailto:fdhuha17@gmail.com" style={{textDecoration: 'none', color: '#80AC7B'}}>Contact Me!</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;