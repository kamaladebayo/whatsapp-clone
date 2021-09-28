import { Avatar, IconButton } from "@material-ui/core"
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons"
import "./Sidebar.css"
import henny from './assets/images/henny.jpg'
import SidebarChat from "./SidebarChat"
const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar__header">
                <Avatar src={henny} />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="search" name="chatsearch" placeholder="Search or start new chat" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
            </div>
        </aside>
    );
}

export default Sidebar;