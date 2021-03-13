import React, {useEffect, useState} from "react";
import CardItem from './CardItem';
import './Cards.css';
import {fetchStyles} from "../../utils/apiClient";


function SelectStyleCards({ name, id, addPreferences }){

    //console.log({name},id);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
      setSelected([])
    }, [name]);

    const [styles, setStyles] = useState([]);

    const refreshStyles = async (id) => {

        const result = await fetchStyles(id);

        console.log(result)

        const data = result.map( r => ({
            style_id : r.style_id,
            style_name : r.style_name,
            image_id: r.image_id
        }));


        setStyles(data);
    }

    useEffect( () =>{
        refreshStyles(id).catch(err => console.log(err));
        setSelected([]);
    },[name]);

    console.log(styles)
    const onClick = (preference, isSelected) => {
        let newSelected = [];
        if (!isSelected) {
            let index = selected.indexOf(preference);
            newSelected = [...selected];
            if (index > -1) {
                newSelected.splice(index, 1);
            }
        } else {
            newSelected = [...selected, preference];
        }
      setSelected(newSelected);
      addPreferences(newSelected, name);
    };

    console.log()
    // selectedStyles.push(preferences);

    return(
            <>
                <h1>{name} options</h1>
                <div className={"cards"}>
                    <h1>Please select the styles you like</h1>
                    <div className={"cards-container"}>
                        <div className={"style-cards-wrapper"}>
                            <ul className={"cards-items"}>
                                {
                                    styles.map( (styleCard, idx) => (
                                        <CardItem
                                            src={`/load-image?img_id=${styleCard.image_id}`}
                                            text={styleCard.style_name}
                                            id={styleCard.style_id}
                                            onClick={onClick}
                                            selected={() => !!selected.find(sel => sel.id === styleCard.style_id)}
                                        />
                                    ))
                                }
                                {/*<CardItem
                                    src={"/rooms-page-images/kitchen.jpg"}
                                    text={"1"}
                                    type={{name}}
                                    onClick={onClick}
                                    selected={() => !!selected.find(sel => sel === '1')}
                                />
                                <CardItem
                                    src={"/rooms-page-images/diningroom.jpg"}
                                    text={"2"}
                                    type={{name}}
                                    onClick={onClick}
                                    selected={() => !!selected.find(sel => sel === '2')}
                                />
                                <CardItem
                                    src={"/rooms-page-images/livingroom.jpg"}
                                    text={"3"}
                                    type={{name}}
                                    onClick={onClick}
                                    selected={() => !!selected.find(sel => sel === '3')}
                                />
                                <CardItem
                                    src={"/rooms-page-images/kitchen.jpg"}
                                    text={"4"}
                                    type={{name}}
                                    onClick={onClick}
                                    selected={() => !!selected.find(sel => sel === '4')}
                                />
                            </ul>
                            <ul className={"cards-items"}>
                               <CardItem
                                    src={"/rooms-page-images/diningroom.jpg"}
                                    text={"5"}
                                    type={{name}}
                                    onClick={onClick}
                                    selected={() => !!selected.find(sel => sel === '5')}
                                />
                                <CardItem
                                    src={"/rooms-page-images/livingroom.jpg"}
                                    text={"6"}
                                    type={{name}}
                                    onClick={onClick}
                                    selected={() => !!selected.find(sel => sel === '6')}
                                />
                                <CardItem
                                    src={"/rooms-page-images/livingroom.jpg"}
                                    text={"7"}
                                    type={{name}}
                                    onClick={onClick}
                                    selected={() => !!selected.find(sel => sel === '7')}
                                />
                                <CardItem
                                    src={"/rooms-page-images/livingroom.jpg"}
                                    text={"8"}
                                    type={{name}}
                                    onClick={onClick}
                                    selected={() => !!selected.find(sel => sel === '8')}
                                />*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </>

        );

}

export default SelectStyleCards;