import React, { useState } from 'react'; 
import {Button, Heading, Input, Text} from "@chakra-ui/react";

export const WaitingRoom = ({joinChat}) =>{

    const [UserName, setUsername] = useState();
    const [ChatRoom,setChatRoom] = useState();


    const onSubmit = (e) => {
        e.preventDefault();
        joinChat(UserName, ChatRoom);
    }


    return(
    <form onSubmit = {onSubmit} className="max-w-sm w-full bg-white p-8 rounded shadow-lg">
        <Heading> Онлайн чат</Heading>
        <div className="mb-4">
            <Text fontsize={"sm"}>Имя пользователя</Text>
            <Input onChange={(e) => setUsername(e.target.value)} name="UserName" placeholder="Введите ваше имя"/>
        </div>
         <div className="mb-4">
            <Text fontsize={"sm"}>Название чата</Text>
            <Input Change={(e) => setChatRoom(e.target.value)} name="ChatRoom" placeholder="Введите Название чата"/>
        </div>
        <Button type="submit" colorScheme="blue">Присоединиться</Button>
    </form>
    ); 
}