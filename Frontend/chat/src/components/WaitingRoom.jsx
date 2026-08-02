import React, { useState } from 'react'; 
import {Button, Heading, Input, Text} from "@chakra-ui/react";

export const WaitingRoom = ({JoinChat}) =>{

    const [userName, setUsername] = useState();
    const [chatRoom,setChatRoom] = useState();


    const onSubmit = (e) => {
        e.preventDefault();
        JoinChat(userName, chatRoom);
    }


    return(
    <form onSubmit = {onSubmit} className="max-w-sm w-full bg-white p-8 rounded shadow-lg">
        <Heading> Онлайн чат</Heading>
        <div className="mb-4">
            <Text fontSize={"sm"}>Имя пользователя</Text>
            <Input onChange={(e) => setUsername(e.target.value)} name="userName" placeholder="Введите ваше имя"/>
        </div>
         <div className="mb-4">
            <Text fontSize={"sm"}>Название чата</Text>
            <Input onChange={(e) => setChatRoom(e.target.value)} name="chatRoom" placeholder="Введите Название чата"/>
        </div>
        <Button type="submit" colorScheme="blue">Присоединиться</Button>
    </form>
    ); 
}