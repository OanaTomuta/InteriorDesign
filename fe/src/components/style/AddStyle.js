import React, { useState } from "react";
import Select from "react-select";
import AddStyleHandler from "./AddStyleHandler";
import ImageUploader from "react-images-upload";
import './Style.css';
import '../admin/StyleConfiguration.css'
import translate from "../i18n/translate";
import {I18Provider} from "../i18n";

export default function AddStyle({submitForm, refreshRooms, roomOptions, locale}){

    const{ handleChange, handleNameChange, handleSubmitChanges,
        newStyle, roomOption, isSubmitting, onDrop } = AddStyleHandler({submitForm,refreshRooms});


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
                                onChange={handleChange}

                            />
                        </li>
                        <li>
                            <label
                                htmlFor={'newStyleName'}
                                className={'style-name-label'}
                            >
                            </label>
                            <input
                                id={'newStyleName'}
                                type={'text'}
                                name={'newStyleName'}
                                className={'new-style-inputs'}
                                placeholder={'Add Style Name'}
                                value={newStyle.newStyleName}
                                onChange={handleNameChange}
                            />
                        </li>
                        <li>
                            <ImageUploader
                                buttonText={translate('add-img')}
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