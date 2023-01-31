import {useState, useEffect} from 'react'

export default function Home(props) {
    const [message, setMessage] = useState([])
    const [usersOnline, setUsersOnline] = useState([])

    props.io.socket.on('total-online', (total) => {
        console.log(total)
    })

    props.io.socket.on('message-from-server', (messageServer) => {
        let currentMessage = [...message]
        currentMessage.push(messageServer)
        setMessage(currentMessage)
    })  

    useEffect(() => {
        props.io.socket.emit('join-room', (props.room.roomname))
        props.io.socket.on('users-in-room-feedback', (usersInRoom) => {
            let currentUsersOnline = [...usersOnline, ...usersInRoom]
            setUsersOnline(currentUsersOnline)
        })
    }, [props.io.socket, props.room.roomname, usersOnline])

    return (
        <>
            {/* Body */}
            <div className="flex" style={{ height: "100vh" }}>

                {/* Sidebar User */}
                <div className="bg-gray-200 basis-1/5 rounded-r-3xl">

                    {/* Users Online */}
                    <div className="">
                        <h1 className="flex justify-center text-xl font-bold p-2 w-full rounded-tr-3xl">Users - Online</h1>
                    </div>

                    {/* User */}
                    <div className="flex flex-col pt-5">
                        {
                            usersOnline.map((value, index) => {
                                return(
                                    <div className="flex items-center px-2 py-2 hover:bg-gray-100">
                                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" class="rounded-full w-16 shadow-lg" alt="Avatar" />
                                        <p key={index} className="text-base font-semibold px-3 h-full ml-3">{value.username}</p>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>

                {/* Column Chat */}
                <div className="bg-white basis-4/5 relative">

                    {/* Bar atas */}
                    <div className="bg-white">
                        <h1 className="text-3xl font-bold border-gray-200 border-b-2 p-4">JCWD_2302</h1>
                    </div>

                    {/* Chat */}
                    <div>
                        {
                            message.map((value, index) => {
                                return(
                                    <div>
                                        <p>{value.message}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Insert Chat */}
                    <div className="absolute inset-x-5 bottom-5">
                        <input type="text" placeholder="Type a message" className="text-lg px-4 py-2 rounded-full shadow-xl" style={{ width: '90%' }} />
                        <button className="font-semibold bg-pink-400 px-4 py-2 rounded-full ml-3 shadow-xl">Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}