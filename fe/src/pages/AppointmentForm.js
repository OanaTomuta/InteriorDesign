import React, {useState} from 'react';
import Form from "../components/form/Form";
import FormSuccess from "../components/form/FormSuccess";
import {I18Provider} from "../components/i18n";


const AppointmentForm = ({preferences,locale}) => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }

    console.log(preferences)
    return(
        <I18Provider locale={locale}>
            <>
                <div className={"form-container"}>
                    {/* <span className={"close-btn"}>x</span>*/}
                    {/*} <div className='form-content-left'>
                        <img className='form-img' src='/rooms-page-images/bedroom.jpg' alt='spaceship' />
                    </div>*/}
                     {!isSubmitted ? (<Form submitForm={submitForm} payload={preferences} locale={locale}/>) : (<FormSuccess locale={locale} />)}

                </div>
            </>
        </I18Provider>
    );
}

export default AppointmentForm;
