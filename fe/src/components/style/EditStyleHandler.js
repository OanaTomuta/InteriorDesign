import React, {useEffect} from "react";
import {useState} from "react";
import {editStyle, fetchStyles} from "../../utils/apiClient";

const EditStyleHandler = ({ refreshRooms }) => {

    const [roomOption, setRoomOption] = useState({
        selectOptions: [],
        room_id: '',
        name: ''
    });

    const [styleOptions, setStyleOptions] = useState({
        selectOptions: [],
    });

    const [selectedStyle, setSelectedStyle] = useState({
        style_id: '',
        style_name: '',
        image_id: ''
    });

    const [newStyle, setNewStyle] = useState({
        newStyleName: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [picture, setPicture] = useState();

    const onDrop = picture => {
        setPicture(picture[0]);
    };

    const refreshStyles = async (room_id) => {

        const result = await fetchStyles(room_id);

        console.log(result)

        const data = result.map( r => ({
            "value" : r.style_id,
            "label" : r.style_name,
            image_id: r.image_id
        }));

        setStyleOptions({ selectOptions: data });
    }

    useEffect( () =>{
        refreshRooms();
    },[]);

    useEffect( () =>{
        refreshStyles(roomOption.room_id).catch(err => console.log(err));
        setSelectedStyle({
            style_id: '',
            style_name: ''
        });
    },[roomOption]);

    const handleRoomSelect = e => {
        setRoomOption({
            selectOptions: roomOption.selectOptions,
            room_id: e.value,
            name: e.label
        });
    };

    const handleStyleSelect = e => {
        setSelectedStyle({
            style_id: e.value,
            style_name: e.label,
            image_id: e.image_id
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
        formData.append('selectedStyle', JSON.stringify({ style_id: selectedStyle.style_id,
                                                                      name: selectedStyle.style_name, image_id: selectedStyle.image_id }))

        setIsSubmitting(true);
        await editStyle(formData).then(res => {
            setIsSubmitting(false); //dupa ce a terminat cu form-ul curent completat si a fost trimis spre backend
            setRoomOption({
                selectOptions: [],
                room_id: '',
                name: ''
            });
            setSelectedStyle({
                style_id: '',
                style_name: ''
            });
            setNewStyle({newStyleName: ''});
        })

        refreshRooms();
        refreshStyles(roomOption.room_id).catch(err => console.log(err));
    };

    return {
        handleRoomSelect, handleStyleSelect, handleNameChange, handleSubmitChanges,
            newStyle, roomOption, styleOptions, isSubmitting, selectedStyle, onDrop};

}
export default EditStyleHandler;