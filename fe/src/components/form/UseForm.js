import {useState, useEffect, useCallback} from 'react';
import { createAppointment } from "../../utils/apiClient";

const useForm = (callBack, validate) => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const{name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleRequestButton = async e => {
        e.preventDefault(); //doesn't refresh the page when clicking "Request Appointment" button

        setErrors(validate(values));
        setIsSubmitting(true);
        createAppointment(values).then( res => {
            setIsSubmitting(false); //dupa ce a terminat cu form-ul curent completat si a fost trimis spre backend
        })                               // resetam starea de IsSubmitting pe false

        console.log(values);
    };

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && isSubmitting){
            callBack();
        }
    },
        [errors]
    );

    return{ handleChange, handleRequestButton, values, errors };
}

export default useForm;