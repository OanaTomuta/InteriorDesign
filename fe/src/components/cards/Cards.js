import React from "react";
import CardItem from './CardItem';
import './Cards.css';

function Cards(){
    return(
        <div className={"cards"}>
            <h1>Please select the rooms you want to be designed</h1>
            <div className={"cards-container"}>
                <div className={"cards-wrapper"}>
                    <ul className={"cards-items"}>
                        <CardItem
                            src={"/rooms-page-images/kitchen.jpg"}
                            text={"Kitchen"}
                        />
                        <CardItem
                            src={"/rooms-page-images/diningroom.jpg"}
                            text={"Dining Room"}
                        />
                        <CardItem
                            src={"/rooms-page-images/livingroom.jpg"}
                            text={"Living Room"}
                        />
                        <CardItem
                            src={"/rooms-page-images/bathroom.jpg"}
                            text={"Bathroom"}
                        />
                        <CardItem
                            src={"/rooms-page-images/bedroom.jpg"}
                            text={"Bedroom"}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;