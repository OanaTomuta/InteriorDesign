import React, {useEffect} from "react";
import {useState} from "react";
import {editRoom,fetchRooms} from "../../utils/apiClient";


const EditRoomHandler = ({refresh}) => {

    const [option, setOption] = useState({
        selectOptions: [],
        room_id: '',
        name: '',
        image_id:''
    });

    const [newName, setNewName] = useState({
        newRoomName: ''
    });

    const [picture, setPicture] = useState();

    const onDrop = picture => {
        setPicture(picture[0]);
    };

    useEffect( () =>{
        refresh();
    },[]);


    console.log(option);

    const handleChange = e => {
        setOption({
            selectOptions: option.selectOptions,
            room_id: e.value,
            name: e.label,
            image_id: e.image_id
        });
    };

    const handleNameChange = e => {
        const{name, value} = e.target;
        setNewName({
            ...newName,
            [name]: value
        });
    }

    //console.log("current option: ",options);



    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmitChanges = async e => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('image', picture, picture.name)
        formData.append('newName', newName.newRoomName)
        formData.append('roomOption', JSON.stringify({ room_id: option.room_id, name: option.name, image_id: option.image_id }))

        setIsSubmitting(true);
        await editRoom(formData).then( res => {
            setIsSubmitting(false);
            setOption({
                selectOptions: [],
                room_id: '',
                name: '',
                image_id:''
            });
            setNewName({newRoomName: ''});
        })

        refresh();
        //console.log("new name: ", setSelectedOption)
    };
    return {handleSubmitChanges, handleChange, handleNameChange, isSubmitting, newName, option, onDrop};

}
export default EditRoomHandler;