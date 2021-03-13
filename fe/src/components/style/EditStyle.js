import React from "react";
import Select from "react-select";
import EditStyleHandler from "./EditStyleHandler";
import "./Style.css"
import ImageUploader from "react-images-upload";
import '../admin/StyleConfiguration.css'
import translate from "../i18n/translate";
import {I18Provider} from "../i18n";


export default function EditStyle({submitForm, refreshRooms, roomOptions, locale}){

    const{ handleRoomSelect, handleStyleSelect, handleNameChange, handleSubmitChanges,
            newStyle, styleOptions, selectedStyle,
            roomOption, isSubmitting, onDrop } = EditStyleHandler({submitForm, refreshRooms});

    console.log(styleOptions)

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
                                placeholder={'Change Style Name'}
                                value={newStyle.newStyleName}
                                onChange={handleNameChange}
                            />
                            { /* {styleOptions && styleOptions.selectOptions.map((style, idx) => (<img key={idx} src={`/load-image?img_id=${style.image_id}`}/>))}*/}
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