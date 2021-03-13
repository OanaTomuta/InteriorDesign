import React, {useEffect} from "react";
import {useState} from "react";
import {deleteStyle, fetchStyles} from "../../utils/apiClient";

const DeleteStyleHandler = ({ refreshRooms }) => {

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

    const [isSubmitting, setIsSubmitting] = useState(false);

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


    const handleSubmitChanges = async e => {
        e.preventDefault(); //doesn't refresh the page when clicking "Request Appointment" button

        setIsSubmitting(true);
        await deleteStyle(roomOption,selectedStyle).then(res => {
            setIsSubmitting(false);
            setRoomOption({
                selectOptions: [],
                room_id: '',
                name: ''
            });
            setSelectedStyle({
                style_id: '',
                style_name: ''
            });
        })

        refreshRooms();
        refreshStyles(roomOption.room_id).catch(err => console.log(err));
    };

    return {
        handleRoomSelect, handleStyleSelect, handleSubmitChanges, roomOption, styleOptions, isSubmitting, selectedStyle};

}
export default DeleteStyleHandler;