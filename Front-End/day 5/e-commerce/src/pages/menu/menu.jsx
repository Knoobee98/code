
import axios from "axios";
import { useEffect, useState } from "react";


let Menu = () => {
    const [data, setData] = useState([]);
    const [backupData, setBackupData] = useState([]);
    const [category, setCategory] = useState([])
    const [categorySelected, setCategorySelected] = useState(0);

    useEffect(() => {
        onGetData();
    }, []);

    let onGetData = async() => {
        try {
            let response = await axios.get(`http://localhost:5000/products`)
            let responseCategory = await axios.get(`http://localhost:5000/category`)

            let newResponseFilter = response.data.filter(value => {
                return value.category === 0
            })
            console.log(newResponseFilter)

            setData(newResponseFilter);
            setBackupData(response.data);
            setCategory(responseCategory.data)
        } catch (error){
            console.log(error);
        }
    }

    let onFilter = (idx) => {
        let newDataFilter = backupData.filter((value) => {
            return value.category === idx
        })
        setData(newDataFilter)
        setCategorySelected(idx)
        
    }

    return(
        <div className="flex px-20 pt-20">
            <div className="basis-1/6">
                <div>
                    <h1 className="text-lg font-bold">
                        {category[categorySelected]}
                    </h1>
                </div>
                {/* sidebar category */}
                {
                    category.map((value, index) => {
                        return(
                            <div key={index}>
                                <button onClick={() => onFilter(index)}>{value}</button>
                            </div>
                        )
                    })
                }
            </div>
            <div className="basis-5/6">
                <div>
                    <h1 className="text-2xl font-bold">
                        Menu
                    </h1>
                </div>
                <div className="mt-10 border-bottom pt-3">
                    <h1 className="text-xl font-bold">
                    {category[categorySelected]}
                    </h1>
                </div>
                {/* list products */}
                <div className="grid grid-cols-2 mt-3">
                    {
                        data.length?
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
                        :
                        'product not found'
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu
