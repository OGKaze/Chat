import { HubConnectionBuilder } from '@microsoft/signalr';
import { WaitingRoom } from './components/WaitingRoom.jsx';
function App() {
const joinChat = async (UserName,ChatRoom) =>{
   var connection = new HubConnectionBuilder()
    .withUrl("http://localhost:5248/chat")
    .withAutomaticReconnect()
    .build();

    connection.on("ReceiveMessage",(UserName,message)=> {
      console.log(UserName);
      console.log(message);

    });

    try{
      await connection.start();
      await connection.invoke("JoinChat", {UserName, ChatRoom});
        setConnection(connection);
    }catch(error){
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <WaitingRoom joinChat={joinChat}/>
    </div>
  );
}

export default App;
