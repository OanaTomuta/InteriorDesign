import React, {useEffect} from "react";
import {useState} from "react";
import {addNewRoom} from "../../utils/apiClient";

const AddRoomHandler = ({refresh}) => {

    const [values, setValues] = useState({
        newRoomName: ''
    });

    const [picture, setPicture] = useState();

    const onDrop = picture => {
        setPicture(picture[0]);
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const{name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmitChanges = async e => {
        e.preventDefault(); //doesn't refresh the page when clicking "Request Appointment" button

        const formData = new FormData();

        formData.append('image', picture, picture.name)
        formData.append('newRoom', values.newRoomName)

        setIsSubmitting(true);
        await addNewRoom(formData).then( res => {
            setIsSubmitting(false);
            setValues({newRoomName: ''});
        })

        refresh();
        //console.log(values);
    };

    return {handleChange, handleSubmitChanges, values, setValues, isSubmitting, onDrop};

}
export default AddRoomHandler;