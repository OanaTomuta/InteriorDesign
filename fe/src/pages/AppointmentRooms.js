import React, {useState} from "react";
import Cards from "../components/cards/Cards";
import {Button} from "../components/button/Button";
import './AppointmentRooms.css'
import AppointmentForm from "./AppointmentForm";
import SelectedRoomOptions from "./SelectedRoomOptions";

export default function AppointmentRooms(){

    const [steps, setSteps] = useState([
        <AppointmentForm/> //initial state daca nu selectez nimic de pe cards
    ])
    const [curr,setCurr] = useState(0); //indicele pasului de pe cards
    const [cards, setCards] = useState([]); //numele cardului selectat
    const [isCardsSelected, setIsCardsSelected] = useState(false) //flag daca s-a trecut de selectarea de cards

    const buildStepsFromCards = cards => {
        return cards.map(card => (<SelectedRoomOptions name={card}/>))
        //fiecare card selectat este transformat intr-o componenta
    }

    return(
        <>
            {!isCardsSelected ? (<Cards onChange={setCards}/>) : steps[curr]}
            {/*daca nu s-au selectat inca rooms (primul pas), se afiseaza selectia
               de camere ( cards cu numele de camere), altfel, continua pe ce camere au fost selectate deja*/}
            <Button
                className={'btn'}
                buttonSize={'btn--medium'}
                onClick={() => {
                    if (!isCardsSelected) {
                        //console.log(cards)
                        const newSteps = buildStepsFromCards(cards) //functie pentru butonul de "Next Step"
                        setSteps([...newSteps, ...steps]) //la pasii deja existenti (AppointmentForm),
                                                                //adaugam noii pasi creati cu buildStepsFromCards
                        setIsCardsSelected(true) //flag ca am trecut de partea de ales camere
                    } else {
                        setCurr(curr + 1); //dupa ce s-a trecut de selectarea camerelor, ramane pe branch-ul asta
                    }                           //care merge pe fiecare pagina selectata anterior
                }}
                // conditie pentru a nu mai arata butonul de Next Step cand s-a ajuns la ultimul pas
                hidden={isCardsSelected && curr >= steps.length-1}
            >
            Next Step
            </Button>
        </>
    );

}