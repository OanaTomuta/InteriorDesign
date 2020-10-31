import React, {useState} from "react";
import CardItem from './CardItem';
import './Cards.css';


function SelectStyleCards({name}){

    const selectedStyles = [];
    const [preferences, setPreferences] = useState([]);
    const onClick = (preference) => {
        let newPreferences = [];
        if (preferences.includes(preference)) {
            let index = preferences.indexOf(preference);
            newPreferences = [...preferences];
            if (index > -1) {
                newPreferences.splice(index, 1);
            }
        } else {
            newPreferences = [...preferences, preference];
        }
        setPreferences(newPreferences);

    }
    console.log(preferences);
    selectedStyles.push(preferences);



    return(
            <>
                <h1>{name} options</h1>
                <div className={"cards"}>
                    <h1>Please select the styles you like</h1>
                    <div className={"cards-container"}>
                        <div className={"cards-wrapper"}>
                            <ul className={"cards-items"}>
                                <CardItem
                                    src={"/rooms-page-images/kitchen.jpg"}
                                    text={"1"}
                                    type={{name}}
                                    onClick={onClick}
                                />
                                <CardItem
                                    src={"/rooms-page-images/diningroom.jpg"}
                                    text={"2"}
                                    type={{name}}
                                    onClick={onClick}
                                />
                                <CardItem
                                    src={"/rooms-page-images/livingroom.jpg"}
                                    text={"3"}
                                    onClick={onClick}
                                />
                                <CardItem
                                    src={"/rooms-page-images/kitchen.jpg"}
                                    text={"4"}
                                    type={{name}}
                                    onClick={onClick}
                                />
                            </ul>
                            <ul className={"cards-items"}>
                               <CardItem
                                    src={"/rooms-page-images/diningroom.jpg"}
                                    text={"5"}
                                    type={{name}}
                                    onClick={onClick}
                                />
                                <CardItem
                                    src={"/rooms-page-images/livingroom.jpg"}
                                    text={"6"}
                                    type={{name}}
                                    onClick={onClick}
                                />
                                <CardItem
                                    src={"/rooms-page-images/livingroom.jpg"}
                                    text={"7"}
                                    type={{name}}
                                    onClick={onClick}
                                />
                                <CardItem
                                    src={"/rooms-page-images/livingroom.jpg"}
                                    text={"8"}
                                    onClick={onClick}
                                />
                            </ul>
                        </div>
                    </div>
                </div>
            </>

        );

}

export default SelectStyleCards;