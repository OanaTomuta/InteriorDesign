import React, {useEffect, useState} from "react";

const SELECTED_COLOR = '#9b8f8a';
const NOT_SELECTED_COLOR = '#cdc5b8';

export default function CardItem(props){

    const [selected,setSelected] = useState(false);

    useEffect(() => {
        if(props.selected || props.selected === false) {
            setSelected(props.selected);
        }
    }, [props]);

    const color = selected ? SELECTED_COLOR : NOT_SELECTED_COLOR;

    const selectCard = () =>{
        setSelected(!selected);
        props.onClick({name: props.text, id:props.id}, !selected);
    };

        return (
            <li className={"cards-item"} style={{backgroundColor: color}}>
                <div className={"cards-item-link"} style={{backgroundColor: color}} >
                    <figure className={"cards-item-pic-wrap"} onClick={selectCard}>
                        <img
                            src={props.src}
                            className={"cards-item-img"}
                            alt={""}
                        />
                    </figure>
                    <div className={"cards-item-info"} style={{backgroundColor: color}} onClick={selectCard}>
                        <h5 className={"cards-item-text"} style={{backgroundColor: color}}>{props.text}</h5>
                    </div>
                </div>
            </li>

        )

}

