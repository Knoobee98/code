// import React from 'react';

// class Work extends React.Component{
//     render(){
//         return(
                
//         )
//     }
// }

import {useState} from 'react';

let Work = () => {
    const [data,] = useState([
        {year: '2007-2009', company: 'Purwadhika'},
        {year: '2009-2011', company: 'Telkom Indonesia'},
        {year: '2011-sekarang', company: 'Freelance'},
    ])

    const [idxSelected, setIdxSelected] = useState(0);

    let onChange = (idx) => {
        setIdxSelected(idx);
    }

    let onMapping = () => {
        return(
            data.map((value, index) => {
                return(
                    <div key={index} onClick={() => onChange(index)}>
                        {value.company}
                    </div>
                )
            })
        )
    }

    return(
        <div>
        <div className="work">
            <div className="work-title">
                <h1>2. Where I Worked</h1>
                    <div className="line">
                    </div>
                        </div>
                    <div className="sidebar">
                        {
                            onMapping()
                        }
                    </div>
                    <div className="description">
                        <div>
                            <p className="title">{data[idxSelected].company}</p>
                            <p className="desc">{data[idxSelected].year}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Work;