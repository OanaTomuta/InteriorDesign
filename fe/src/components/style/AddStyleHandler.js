import React, {useEffect} from "react";
import {useState} from "react";
import {addNewStyle} from "../../utils/apiClient";

const AddStyleHandler = ({refreshRooms}) => {

    const [roomOption, setRoomOption] = useState({
        selectOptions: [],
        room_id: '',
        name: ''
    });

    const [newStyle, setNewStyle] = useState({
        newStyleName: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [picture, setPicture] = useState();

    const onDrop = picture => {
        setPicture(picture[0]);
    };

    useEffect( () =>{
        refreshRooms();
    },[]);

    const handleChange = e => {
        setRoomOption({
            selectOptions: roomOption.selectOptions,
            room_id: e.value,
            name: e.label
        });
    };

    const handleNameChange = e => {
        const{name, value} = e.target;
        setNewStyle({
            ...newStyle,
            [name]: value
        });
    };

    const handleSubmitChanges = async e => {
        e.preventDefault(); //doesn't refresh the page when clicking "Request Appointment" button

        const formData = new FormData();


        formData.append('image', picture, picture.name)
        formData.append('newStyle', newStyle.newStyleName)
        formData.append('roomOption', JSON.stringify({ room_id: roomOption.room_id, name: roomOption.name }))

        console.log(formData)
        // setIsSubmitting(true);
        await addNewStyle(formData).then( res => {
            setIsSubmitting(false); //dupa ce a terminat cu form-ul curent completat si a fost trimis spre backend
            setRoomOption({
                selectOptions: [],
                room_id: '',
                name: ''
            });
            setNewStyle({newStyleName: ''});
        })

        refreshRooms();
        //console.log(values);
    };

    return {handleChange, handleNameChange, handleSubmitChanges,
        newStyle, roomOption, isSubmitting, onDrop};

}
export default AddStyleHandler;