import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

export default function DetailProduct(){
    const productId = useParams();
    const selectSize = useRef();
    const selectTopping = useRef();
    const selectSugar = useRef();
    const [data, setData] = useState(null);
    const [sizeToShow, setSizeToShow] = useState(0);
    const [toppingToShow, setToppingToShow] = useState(0);
    const [sugarToShow, setSugarToShow] = useState(0);
    const [isDisabled, setIsDisabled] = useState('false');

    let onGetData = async() => {
        try{
            let response = await axios.get(`http://localhost:5000/products/${productId.id}`)
            setData(response.data);
        } catch(error){
            console.log(error);
        }
    }

    let onSelectSize = () => {
        let indexSelectedSize = selectSize.current.value;
        setSizeToShow(indexSelectedSize);
    }

    let onSelectTopping = () => {
        let indexSelectedTopping = selectTopping.current.value;
        setToppingToShow(indexSelectedTopping);
    }

    let onSelectSugar = () => {
        let indexSelectedSugar = selectSugar.current.value;
        setSugarToShow(indexSelectedSugar);
    }

    let onSubmit = async() => {
        try{
        
            let dataTosend = {
                product_id: data.id,
                size: parseInt(sizeToShow),
                topping: parseInt(toppingToShow),
                sugar: parseInt(sugarToShow),
                qty: 1,
                user_id: parseInt(localStorage.getItem('token'))
            }
            let checkToken = localStorage.getItem('tokenUid');
            let checkCart = await axios.get(`http://localhost:500/cart?product_id=${data.id}`)
            if(checkToken){
                if(checkCart.data.length === 0){
                    let addToCart = await axios.post('http://localhost:5000/cart', dataTosend)
                    console.log(addToCart);
                } else {
                    let newQuantity = checkCart.data[0].qty + 1
                    let updateQty = await axios.patch(`http://localhost:5000/cart/${checkCart.data[0].id}`, {qty: newQuantity})
                    console.log(updateQty);
                }
            } else {
                setIsDisabled(true);
            }
            
        } catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        onGetData();
    }, []);

    if(data === null){
        return(
            <div>
                Loading ...
            </div>
        )
    }

    return(
        <div>
            <div>

            </div>
            <div className="flex items-center my-bg-main" style={{ height: '300px'}}>
                <div className="basis-2/5 flex justify-center">
                    <img src={data.image} alt='product' className='rounded-full' style={{width: '200px', height: '200px'}} />
                </div>
                <div className="basis-3/5 my-light">
                    <h1 className="text-2xl font-bold">
                        {data.name}
                    </h1>
                    <h1 className="text-xl mt-2">
                        {data.size[sizeToShow].calories} calories
                    </h1>
                    <h1 className="basis-3/5 my-fs-25 mt-2">
                        Rp. {(data.size[sizeToShow].price).toLocaleString()}
                    </h1>
                </div>
            </div>
            <div className="flex mt-10">
                <div className="basis-1/3 px-24">
                    <h1 className="my-fs-25 font-bold pb-2" style={{borderBottom: '3px solid silver'}}>
                        Size Options
                    </h1>
                    <select ref={selectSize} onClick={onSelectSize}  id="countries" className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {
                        data.size.map((value, index) => {
                            return(
                                <option key={index} value={index}>{value.option}</option>
                            )
                        })
                    }    
                    </select>
                </div>
                <div className="basis-2/5">
                    <h1 className="my-fs-25 font-bold pb-2" style={{borderBottom: '3px solid silver'}}>
                        Topping
                    </h1>
                    <select ref={selectTopping} onClick={onSelectTopping} id="countries" className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {
                        data.topping.map((value, index) => {
                            return(
                                <option key={index} value={index}>{value}</option>
                            )
                        })
                    }    
                    </select>

                    {
                        data.sugar?
                        <>
                        <h1 className="my-fs-25 font-bold pb-2 mt-5" style={{borderBottom: '3px solid silver'}}>
                        Sugar
                        </h1>
                        <select ref={selectSugar} onClick={onSelectSugar} id="countries" className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {data.sugar.map((value, index) => {
                            return(
                                <option key={index} value={index}>{value}</option>
                            )
                        })}    
                        </select>
                        </>
                        : null
                    }
                </div>
            </div>
            {
                localStorage.getItem('tokenUid') || localStorage.getItem('token') ? 
                <div className="flex items-center justify-center mt-16">
                <button disabled={isDisabled} onClick={onSubmit} className="bg-green-400 p-3 rounded-full border-slate-100 text-2xl text-slate-50 font-bold">Order Now</button>
                </div>
                :  null
            }

        </div>
    )
}