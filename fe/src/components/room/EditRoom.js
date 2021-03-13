import React from "react";
import Select from "react-select";
import EditRoomHandler from "./EditRoomHandler";
import "./EditRoom.css"
import ImageUploader from "react-images-upload";
import {I18Provider} from "../i18n";
import translate from "../i18n/translate";

export default function EditRoom({submitForm, refresh, options, locale}){

    const{ handleSubmitChanges, handleNameChange, isSubmitting, newName, option, handleChange, onDrop} = EditRoomHandler({submitForm,refresh});

    return(
        <I18Provider locale={locale}>
            <form onSubmit={handleSubmitChanges}>
                <div className={"new-room-inputs"}>
                    <ul>
                        <li>
                            <Select
                                value={{label: option.name, value: option.room_id}}
                                className={"select-list"}
                                options={options.selectOptions}
                                onChange={handleChange}
                            />
                        </li>
                        <li>
                            <label
                                htmlFor={'newRoomName'}
                                className={'room-name-label'}
                            >
                            </label>
                            <input
                                id={'newRoomName'}
                                type={'text'}
                                name={'newRoomName'}
                                className={'new-room-inputs'}
                                placeholder={'Change Room Name'}
                                value={newName.newRoomName}
                                onChange={handleNameChange}
                            />
                        </li>
                        <li>
                            <ImageUploader
                                buttonText={translate('change-img')}
                                className={"image-uploader"}
                                singleImage={true}
                                withIcon={false}
                                onChange={onDrop}
                                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                                maxFileSize={5242880}
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