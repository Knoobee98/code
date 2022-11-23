// import React from 'react';
// import {Link} from 'react-router-dom';
// class Home extends React.Component{

//     state = {
//         number: 0,
//       }
    
//       // changeNumber = () => {
//       //   this.setState({
//       //     number: this.state.number + 1
//       //   })
//       // }
    
//       // decreaseNumber = () => { 
//       //   this.setState({ 
//       //     number: this.state.number - 1
//       //   })
//       // }
    
//       changeNumber = (operator) => {
//         if(operator === '+'){
//           this.setState({number: this.state.number + +1})
//           alert('data berhasil ditambahkan')
//         } else {
//           this.setState({number: this.state.number -1})
//           alert('data berhasil dikurangkan')
//         }
//       }
    
//       componentDidMount(){
//         //sering digunakan untuk melakukan fetch data
//         //dijalankan ketika proses render
//         console.log('did mount running')
//       }
    
//       componentDidUpdate(){
//         //dijalankan setiap kali terjadi perubahan state
//         console.log('did update running')
//       }
    
//       componentWillUnmount(){
//         //dijalankan sebelum component dihapus
//         //sebelum berpindah halaman
//         console.log('will unmount running')
//       }

//     render(){
//         console.log('render running');
//         return(
//             <>
//         <h1>Numbers</h1>
        
//         <button onClick={() => this.changeNumber('-')}>
//           -
//         </button>
//         <h1>
//           {this.state.number}
//         </h1>
//         <button onClick={() => this.changeNumber('+')}>
//           +
//         </button>
//         <Link to='/profile'>
//             <h1>menuju profile</h1>
//         </Link>
        
//       </>
//         )
//     }
// }

import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

let Home = () => {
    const [number, setNumber] = useState(0);

    let changeNumber = (operator) => {
        // let newNumber = number;
        // newNumber++
        if(operator === '+'){
            setNumber(number + 1);
        } else {
            setNumber(number - 1);
        }
    }

    // componentDidMount
    useEffect(() => {
        console.log('useEffect did mount running');
    }, []);

    // componentDidUpdate
    useEffect(() => {
        console.log('useEffect did update running');
    }, [number]);

    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('useEffect will unmount running');
        }
    }, []);

    const inputUsername = useRef();
    const inputPassword = useRef();
    let onSubmit = () => {
        console.log(inputUsername.current.value);
        console.log(inputPassword.current.value);
    }

    return(
        <>
        {console.log('render 1x')}
        <h1>This is Home</h1>
        <button onClick={() => changeNumber('-')}>
            -
        </button>
        <h1>
            {number}
        </h1>
        <button onClick={() => changeNumber('+')}>
            +
        </button>
        <br />
        <br />
        <Link to='/profile'>
            <button>
                menuju profile
            </button>
        </Link>
        <br />
        <input type='text' placeholder='input username' ref={inputUsername} />
        <input type='password' placeholder='input password' ref={inputPassword} />
        <br />
        <button onClick={onSubmit}>submit</button>
        </>
    )
}

export default Home;