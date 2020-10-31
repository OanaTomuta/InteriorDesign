import React, {useState} from "react";
import CardItem from './CardItem';
import './Cards.css';
import {Button} from "../button/Button";

function SelectRoomCards({onChange}) {

    const [rooms, setRooms] = useState([]);
    const onClick = (room) => {
        let newRooms = [];
        if (rooms.includes(room)) {
            let index = rooms.indexOf(room);
            newRooms = [...rooms];
            if (index > -1) {
                newRooms.splice(index, 1);
            }
        } else {
            newRooms = [...rooms, room]; //creeaza un nou array cu elem din rooms, spread operator
        }
        setRooms(newRooms)
        onChange(newRooms); //functia in care se modifica setCards din AppointmentRooms
    }
    console.log(rooms);

    return (
        <div className={"cards"}>
            <h1>Please select the rooms you want to be designed</h1>
            <div className={"cards-container"}>
                <div className={"cards-wrapper"}>
                    <ul className={"cards-items"}>
                        <CardItem
                            src={"/rooms-page-images/kitchen.jpg"}
                            text={"Kitchen"}
                            onClick={onClick}
                        />
                        <CardItem
                            src={"/rooms-page-images/diningroom.jpg"}
                            text={"Dining Room"}
                            onClick={onClick}
                        />
                        <CardItem
                            src={"/rooms-page-images/livingroom.jpg"}
                            text={"Living Room"}
                            onClick={onClick}
                        />
                        <CardItem
                            src={"/rooms-page-images/bathroom.jpg"}
                            text={"Bathroom"}
                            onClick={onClick}
                        />
                        <CardItem
                            src={"/rooms-page-images/bedroom.jpg"}
                            text={"Bedroom"}
                            onClick={onClick}
                        />
                    </ul>
                </div>
            </div>

        </div>
    )

}

export default SelectRoomCards;