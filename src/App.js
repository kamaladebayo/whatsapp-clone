import './App.css';
import ChatComponent from './ChatComponent';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar/>
        <ChatComponent/>
      </div>
    </div>
  );
}

export default App;
