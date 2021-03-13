import {useState, useEffect, useCallback} from 'react';
import {checkLogin, createAppointment, fetchAdmin, fetchForm} from "../../utils/apiClient";


const LoginUseForm = (callBack, validate) => {


    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isClicked, setIsClicked] = useState(false)

    const [ response, setResponse ] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    useEffect(() => { //conditie de a nu repeta randarea
        (async () => await checkLogin(values)
            .then(res=> setResponse(res)))();
    }, [values])


    const handleLoginButton = async e => {
        setIsClicked(true);
        e.preventDefault(); //doesn't refresh the page when clicking "Request Appointment" button


        setErrors(validate(values));

        if(response === true){
            setIsSubmitting(true);
        }
       // adminLoggedIn();

    };

    useEffect(() => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callBack();
            }
        },
        [errors]
    );

    return {handleChange, handleLoginButton, values, errors, isSubmitting};
}

export default LoginUseForm;