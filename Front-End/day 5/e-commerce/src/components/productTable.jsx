import { useState } from 'react';
import './../stylesheet/styles.css';

let ProductTable = () => {
    const [cart,] = useState([
        {id: '1', product: 'Apel', quantity: '50'},
        {id: '2', product: 'Mangga', quantity: '100'},
        {id: '3', product: 'Susu', quantity: '300'},
        {id: '4', product: 'Daging Ayam Paha Atas', quantity: '400'},
        {id: '5', product: 'Buntut Sapi', quantity: '500'},
        {id:'6', product: 'Sabun Mandi Dettol', quantity: '60'},
        {id: '7', product: 'Milo Bubuk', quantity: '700'},
        {id: '8', product: 'Permen Sugus', quantity: '800'},
        {id: '9', product: 'Plastik Sampah 1 Kg', quantity:'900'},
        {id: '10', product: 'Sendok Plastik', quantity:'100'},
    ]);
    return (
        <div className='Table'>
            <h1>Product Table</h1>
            <br />
            <table>
                <thead>
                    <tr>
                        <td>No.</td>
                        <td>Product Name</td>
                        <td>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.product}</td>
                                    <td>{item.quantity}</td>
                                </tr>    
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;