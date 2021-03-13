import React, {useEffect, useState} from "react";
import './RoomConfiguration.css';
import AddRoom from "../room/AddRoom";
import EditRoom from "../room/EditRoom";
import DeleteRoom from "../room/DeleteRoom";
import {fetchRooms} from "../../utils/apiClient";
import {I18Provider} from "../i18n";
import translate from "../i18n/translate";


export default function RoomConfiguration({locale}){

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [options, setOptions] = useState({
        selectOptions: [],
        room_id: '',
        name: '',
        image_id: ''
    });

    function submitForm(){
        setIsSubmitted(true);
    }

    const refresh = async () => {

        console.log("called");
        const result = await fetchRooms();
        const data = result.map( r => ({
            "value" : r.room_id,
            "label" : r.name,
            image_id: r.image_id
        }));

        setOptions({selectOptions: data, room_id: '', name: '', image_id: ''});
    }


    return(
        <I18Provider locale={locale}>
            <>
                <div className={"page-container"}>
                    <div className={"wrapper"}>
                        <ul className={"button-columns"}>
                            <li className={"container"}>
                                <div className={"column-item"}>
                                    <h2>{translate('add-room')}</h2>
                                    <AddRoom
                                        submitForm={submitForm}
                                        refresh={refresh}
                                        locale={locale}
                                     />
                                </div>
                            </li>
                            <li className={"container"}>
                                <div className={"column-item"}>
                                    <h2>{translate('edit-room')}</h2>
                                    <EditRoom
                                        submitForm={submitForm}
                                        refresh={refresh}
                                        options={options}
                                        locale={locale}
                                    />
                                </div>
                            </li>
                            <li className={"container"}>
                                <div className={"column-item"}>
                                    <h2>{translate('delete-room')}</h2>
                                    <DeleteRoom
                                        submitForm={submitForm}
                                        refresh={refresh}
                                        options={options}
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