import React, {useState} from 'react';
import Form from "../components/form/Form";
import FormSuccess from "../components/form/FormSuccess";


const AppointmentForm = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }

    return(
        <>
        <div className={"form-container"}>
            <span className={"close-btn"}>x</span>
            {/*} <div className='form-content-left'>
                <img className='form-img' src='/rooms-page-images/bedroom.jpg' alt='spaceship' />
            </div>*/}
             {!isSubmitted ? (<Form submitForm={submitForm}/>) : (<FormSuccess />)}

        </div>
        </>
    );
}

export default AppointmentForm;
