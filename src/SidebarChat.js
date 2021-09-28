import { Avatar } from '@material-ui/core'
import chatroomIMG from './assets/images/08.png'
import './SidebarChat.css'

const SidebarChat = () => {
    return ( 
        <div className="sidebarChat">

            {/* <h2>Sidebar Chat</h2> */}
            <span title="Mabel Library">
                <Avatar src={chatroomIMG}/>
            </span>
            <div className="sidebarChat__info">
                <h4>WTMG!🧏🏿‍♂️</h4>
                <p>CMP continues...</p>
            </div>
        </div>
     );
}
 
export default SidebarChat;