import { Avatar } from '@material-ui/core'
import aby from './assets/images/aby.jpg'
import './SidebarChat.css'

const SidebarChat = () => {
    return ( 
        <div className="sidebarChat">

            {/* <h2>Sidebar Chat</h2> */}
            <Avatar/>
            <div className="sidebarChat__info">
                <h4>Room name</h4>
                <p>This is the last message</p>
            </div>
        </div>
     );
}
 
export default SidebarChat;