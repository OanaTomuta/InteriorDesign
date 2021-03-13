import {useEffect, useState} from "react";
import {deleteRoom, fetchRooms} from "../../utils/apiClient";

const DeleteRoomHandler = ({refresh}) => {

    const [option, setOption] = useState({
        selectOptions: [],
        room_id: '',
        name: '',
        image_id:''
    });


    useEffect( () =>{
        refresh();
    },[]);

    const handleChange = e => {
        // const{value, label} = e.target;
        setOption({
            selectOptions: option.selectOptions,
            room_id: e.value,
            name: e.label,
            image_id: e.image_id
        });
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmitChanges = async e => {
        e.preventDefault();

        setIsSubmitting(true);
        await deleteRoom(option).then( res => {
            setIsSubmitting(false);
            setOption({
                selectOptions: [],
                room_id: '',
                name: ''
            });
        })
        refresh();

    };
    return { isSubmitting, handleSubmitChanges, option, handleChange };

}
export default DeleteRoomHandler;