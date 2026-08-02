import {useState} from'react';
import {setConnection} from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { Chat } from './components/Chat.jsx';
import { WaitingRoom } from './components/WaitingRoom.jsx';
function App() {
  const [connection, setConnection] = useState(null);
  const [chatRoom, setChatRoom] = useState("");
  const [messages, setMessages] = useState([]);
const JoinChat = async (userName,chatRoom) =>{
   var connection = new HubConnectionBuilder()
    .withUrl("http://localhost:5248/chat")
    .withAutomaticReconnect()
    .build();

    connection.on("ReceiveMessage",(userName,message)=> {
    setMessages((messages) => [...messages,{userName, message}]);

    });

    try{
      await connection.start();
      await connection.invoke("JoinChat", {userName, chatRoom});
        setConnection(connection);
        setChatRoom(chatRoom);
    }catch(error){
      console.error("❌ ERROR in JoinChat:");

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
     {connection ? <chat messages chatRoom ={chatRoom} /> : <WaitingRoom JoinChat={JoinChat}/>}

    </div>
  );
}

export default App;
