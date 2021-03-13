import React, {useState} from "react";
import Select from "react-select";
import DeleteRoomHandler from "./DeleteRoomHandler";
import "./EditRoom.css"
import {I18Provider} from "../i18n";
import translate from "../i18n/translate";

export default function DeleteRoom({submitForm, refresh, options,locale}){

    const{ handleSubmitChanges,option,handleChange,isSubmitting} = DeleteRoomHandler({submitForm,refresh});

    console.log(options)
    return(
        <I18Provider locale={locale}>
            <form onSubmit={handleSubmitChanges}>
                <div className={"new-room-inputs"}>
                    <Select
                        value={{label: option.name, value: option.room_id}}
                        className={"select-list"}
                        options={options.selectOptions}
                        onChange={handleChange}
                    />
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