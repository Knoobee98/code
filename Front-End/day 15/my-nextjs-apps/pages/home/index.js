import axios from 'axios'
import Link from 'next/link'
export default function Home(props){
    return(
        <div>
            <h1>Home Page</h1>
            <Link href="/profile/profile">Link to profile</Link>
            <br/>
            <Link href="/">link to landing page</Link>
            <br/>
            {
                props.dataProducts.map((value, index) => {
                    return(
                        <div key={index}>{value.username}</div>
                    )
                })
            }
        </div>
    )
}

export const getServerSideProps = async() => {
    try{
        let res = await axios.get('http://localhost:5000/users')
        console.log(res.data)

        return{
            props: {
                dataProducts: res.data
            }
        }
    } catch(error){
        console.log(error)
    }
}