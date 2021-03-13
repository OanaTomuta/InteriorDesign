import React from "react";
import AddRoomHandler from "./AddRoomHandler";
import ImageUploader from "react-images-upload";
import {I18Provider} from "../i18n";
import translate from "../i18n/translate";

export default function AddRoom({submitForm, refresh, locale}){

    const{ handleChange, handleSubmitChanges, values, isSubmitting, onDrop } = AddRoomHandler({submitForm,refresh});


    return(
        <I18Provider locale={locale}>
            <form onSubmit={handleSubmitChanges}>
                <div className={"new-room-inputs"}>
                    <ul>
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
                                placeholder={'Enter Room Name'}
                                value={values.newRoomName}
                                onChange={handleChange}
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