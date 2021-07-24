import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, EmojiEmotionsOutlined, MicOutlined, MoreVert, SearchOutlined } from '@material-ui/icons'
import './ChatComponent.css'
const ChatComponent = () => {
    return ( 
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>last seen at...</p>
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
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Catalyst</span>
                    Do your best!
                    <span className="chat__timestamp">{Date().toString()}</span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Kamal</span>
                    I'll make you proud
                    <span className="chat__timestamp">{Date().toString()}</span>
                </p>
            </div>
            <div className="chat__input">
                <IconButton>
                    <EmojiEmotionsOutlined />
                </IconButton>
                <form>
                    <input type="text" placeholder="Type a message"/>
                    <button type="submit">Send</button>
                </form>
                <IconButton>
                    <MicOutlined />
                </IconButton>
            </div>

        </div>
     );
}
 
export default ChatComponent;