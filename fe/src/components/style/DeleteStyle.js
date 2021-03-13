import React from "react";
import Select from "react-select";
import "./Style.css"
import DeleteStyleHandler from "./DeleteStyleHandler";
import translate from "../i18n/translate";
import {I18Provider} from "../i18n";

export default function DeleteStyle({submitForm, refreshRooms, roomOptions, locale}){

    const{ handleRoomSelect, handleStyleSelect, handleSubmitChanges, styleOptions, selectedStyle,
        roomOption, isSubmitting } = DeleteStyleHandler({submitForm, refreshRooms});


    return(
        <I18Provider locale={locale}>
            <form onSubmit={handleSubmitChanges}>
                <div className={"new-room-inputs"}>
                    <ul>
                        <li>
                            <h5>{translate('select-room')}</h5>
                            <Select
                                value={{label: roomOption.name, value: roomOption.room_id}}
                                className={"select-list"}
                                options={roomOptions.selectOptions}
                                onChange={handleRoomSelect}
                                captureMenuScroll
                            />
                        </li>
                        <li>
                            <h5>{translate('select-style')}</h5>
                            <Select
                                value={{label: selectedStyle.style_name, value: selectedStyle.style_id}}
                                className={"select-list"}
                                options={styleOptions.selectOptions}
                                onChange={handleStyleSelect}
                            />
                        </li>
                    </ul>
                </div>
                <button
                    disabled={isSubmitting}
                    className={'button'}
                    type={'submit'}
                >
                    {translate('submit-change')}
                </button>
            </form>
        </I18Provider>
    );
}