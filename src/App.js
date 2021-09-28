import { useEffect, useState } from 'react';
import './App.css';
import ChatComponent from './ChatComponent';
import Sidebar from './Sidebar';
import Pusher from "pusher-js"
import axios from './axios'


function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      console.log(response.data);
      setMessages(response.data)
    })
  }, [])
  useEffect(() => {
    const pusher = new Pusher('f4c3841a420ae55e81f4', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      // channel.unsuscribe();
    };
  }, [messages])

 
  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar className="thesidebar"/>
        <ChatComponent messages={messages}/>
      </div>
    </div>
  );
}

export default App;

