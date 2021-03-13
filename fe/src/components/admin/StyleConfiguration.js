import React, {useState} from "react";
import './StyleConfiguration.css';
import {fetchRooms} from "../../utils/apiClient";
import AddStyle from "../style/AddStyle";
import EditStyle from "../style/EditStyle";
import DeleteStyle from "../style/DeleteStyle";
import {I18Provider} from "../i18n";
import translate from "../i18n/translate";

export default function StyleConfiguration({locale}){

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [roomOptions, setRoomOptions] = useState({
        selectOptions: [],
        room_id: '',
        name: ''
    });


    const refreshRooms = async () => {

        const result = await fetchRooms();
        const data = result.map( r => ({
            "value" : r.room_id,
            "label" : r.name
        }));

        setRoomOptions({selectOptions: data, room_id: '', name: ''});
    }

    function submitForm(){
        setIsSubmitted(true);
    }



    //console.log(selectedRoom);

    return(
        <I18Provider locale={locale}>
            <>
                <div className={"page-container"}>
                    <div className={"wrapper"}>
                        <ul className={"button-columns"}>
                            <li className={"container"}>
                                <div className={"column-item"}>
                                    <h2>{translate('add-style')}</h2>
                                    <AddStyle
                                        submitForm={submitForm}
                                        refreshRooms={refreshRooms}
                                        roomOptions={roomOptions}
                                        locale={locale}
                                    />
                                </div>
                            </li>
                            <li className={"container"}>
                                <div className={"column-item"}>
                                    <h2>{translate('edit-style')}</h2>
                                    <EditStyle
                                        submitForm={submitForm}
                                        refreshRooms={refreshRooms}
                                        roomOptions={roomOptions}
                                        locale={locale}
                                    />
                                </div>
                            </li>
                            <li className={"container"}>
                                <div className={"column-item"}>
                                    <h2>{translate('delete-style')}</h2>
                                    <DeleteStyle
                                        submitForm={submitForm}
                                        refreshRooms={refreshRooms}
                                        roomOptions={roomOptions}
                                        locale={locale}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        </I18Provider>
    );
}