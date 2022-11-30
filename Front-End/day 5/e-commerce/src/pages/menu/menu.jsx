
import axios from "axios";
import { useEffect, useState } from "react";


let Menu = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        onGetData();
    }, []);

    let onGetData = async() => {
        try {
            let response = await axios.get(`http://localhost:5000/products`)
            setData(response.data);
        } catch (error){
            console.log(error);
        }
    }

    return(
        <div className="flex px-20 pt-20">
            <div className="basis-1/6">
                <div>
                    <h1 className="my-fs-25 font-bold">
                        Drinks
                    </h1>
                </div>
            </div>
            <div clasName="basis-5/6">
                <div>
                    <h1 className="my-fs-30 font-bold">
                        Menu
                    </h1>
                </div>
                <div className="mt-10 border-bottom pb-3">
                    <h1 className="my-fs-25 font-bold">
                        Drinks
                    </h1>
                </div>
                {/* list products */}
                <div className="grid grid-cols-2 mt-3">
                    {
                        data.map((value, index) => {
                            return(
                                <div key={index} className='flex items-center mt-3'>
                                    <div>
                                        <img src={value.image} style={{ width:'100px', height:'100px' }} alt="product-pics" className='rounded-full' />
                                    </div>
                                    <div className='pl-3'>
                                        <h1 className='my-fs-20 font-bold'>
                                            {value.name}
                                        </h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu
