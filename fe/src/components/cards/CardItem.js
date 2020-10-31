import React, {useState} from "react";


export default function CardItem(props){

    const [color,setColor] = useState('#cdc5b8');
    const [selected,setSelected] = useState(false);


    const selectCard = () =>{

        props.onClick(props.text);
        let newColor = color === '#cdc5b8' ? '#9b8f8a' : '#cdc5b8';
        setColor(newColor);
        setSelected(true);

    }

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

