import React, {useState} from 'react';
import Form from "../components/form/Form";
import FormSuccess from "../components/form/FormSuccess";


const AppointmentForm = ({preferences}) => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }

    console.log(preferences)
    return(
        <>
        <div className={"form-container"}>
            <span className={"close-btn"}>x</span>
            {/*} <div className='form-content-left'>
                <img className='form-img' src='/rooms-page-images/bedroom.jpg' alt='spaceship' />
            </div>*/}
             {!isSubmitted ? (<Form submitForm={submitForm} payload={preferences}/>) : (<FormSuccess />)}

        </div>
        </>
    );
}

export default AppointmentForm;
