import React, {useState} from "react";
import SelectRoomCards from "../components/cards/SelectRoomCards";
import {Button} from "../components/button/Button";
import './AppointmentRooms.css'
import AppointmentForm from "./AppointmentForm";
import SelectStyleCards from "../components/cards/SelectStyleCards";
import {I18Provider} from "../components/i18n";
import translate from "../components/i18n/translate";

export default function AppointmentRooms({locale}){

    // const [steps, setSteps] = useState([
    //      //initial state daca nu selectez nimic de pe cards
    // ]);
    const [curr,setCurr] = useState(0); //indicele pasului de pe cards
    const [cards, setCards] = useState([]); //numele cardului selectat
    const [isCardsSelected, setIsCardsSelected] = useState(false); //flag daca s-a trecut de selectarea de cards
    const [preferences, setPreferences] = useState({});

    const addPreferences = (prefs, room) => {
        const newPreferences = { ...preferences };
        newPreferences[room] = prefs;
        setPreferences(newPreferences);
            // Object.assign({}, preferences, {[room]: prefs})
    };

    // const buildStepsFromCards = ( cards ) => {
    //     return cards.map(card => (<SelectStyleCards name={card} addPreferences={addPreferences} />))
    //     //fiecare card selectat este transformat intr-o componenta
    // };

    const renderCards = () => {
      if(!isCardsSelected){
        return (<SelectRoomCards onChange={setCards} locale={locale}/>) //apar room cards
      } else if(curr <= cards.length-1) {
        return (<SelectStyleCards name={cards[curr].name} id={cards[curr].id} addPreferences={addPreferences}  locale={locale} />)
      } else if(curr === 0 || curr > cards.length-1) {
        return (<AppointmentForm name={'appointmentForm'} preferences={preferences}  locale={locale}/>)
      }
    };

    console.log(`prefrences: `, preferences);

        return(
        <>
          {renderCards()}
            {/*daca nu s-au selectat inca rooms (primul pas), se afiseaza selectia
               de camere ( cards cu numele de camere), altfel, continua pe ce camere au fost selectate deja*/}
            <I18Provider locale={locale}>
                <Button
                    className={'btn'}
                    buttonSize={'btn--medium'}
                    onClick={() => {
                        if (!isCardsSelected) {
                            //console.log(cards)
                            // const newSteps = buildStepsFromCards(cards); //functie pentru butonul de "Next Step"
                            // setSteps([...newSteps, ...steps]); //la pasii deja existenti (AppointmentForm),
                                                                    //adaugam noii pasi creati cu buildStepsFromCards
                            setIsCardsSelected(true) //flag ca am trecut de partea de ales camere
                        } else {
                            //salveaza imaginile

                            setCurr(curr + 1); //dupa ce s-a trecut de selectarea camerelor, ramane pe branch-ul asta
                        }                           //care merge pe fiecare pagina selectata anterior
                    }}
                    // conditie pentru a nu mai arata butonul de Next Step cand s-a ajuns la ultimul pas
                    hidden={isCardsSelected && curr > cards.length-1}
                >
                    {translate('next-step-button')}
                </Button>
            </I18Provider>
        </>
    );

}