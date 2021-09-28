import { Avatar, IconButton } from '@material-ui/core'
import chatroomIMG from './assets/images/08.png'


import { AttachFile, EmojiEmotionsOutlined, MicOutlined, MoreVert, SearchOutlined } from '@material-ui/icons'
import { useState } from 'react'
import axios from './axios'
import './ChatComponent.css'
const ChatComponent = ({ messages }) => {
    const [input, setInput] = useState('')
    const [username, setName] = useState('Anonymous')

    const sendMessage = async (e) => {
        e.preventDefault()
        let username = prompt("Enter your name");
        setName(username)
        // alert(username)
        if (username != null) {
            await axios.post('/messages/new', {
                "message": input,
                "name": username,
                "timestamp": Date().toString(),
                "received": false
            })

        } 
        

        setInput('')
    }


    return ( 
        <div className="chat">
            <div className="chat__header">
                <span title="Mabel Library">
                    <Avatar src={chatroomIMG}/>
                </span>
                <div className="chat__headerInfo">
                    <h3>WTMG!🧏🏿‍♂️</h3>
                    <p>{`last seen at... ${Date().toString()}`}</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body" onLoad={(e) => e.target.scrollTo(0, 50000000)}>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Kamal</span>
                    Inspired by <code>europeangoldfinch.net</code> in prison break.

                    <span className="chat__timestamp">{Date().toString()}</span>
                </p>
                {messages.map(message => {
                    return <p className={`chat__message ${message.received && "chat__receiver"}`}>
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">{message.timestamp}</span>
                </p>
                })}
            </div>
            <div className="chat__input">
                <IconButton>
                    <EmojiEmotionsOutlined />
                </IconButton>
                <form>
                    <input type="text" placeholder="Type a message" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <button type="submit" onClick={sendMessage}>Send</button>
                </form>
                <IconButton>
                    <MicOutlined />
                </IconButton>
            </div>

        </div>
     );
}
 
export default ChatComponent;