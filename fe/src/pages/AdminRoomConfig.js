import React from "react";
import RoomConfiguration from "../components/admin/RoomConfiguration";
import {Link} from "react-router-dom";
import "./AdminRoomConfig.css"
import {I18Provider} from "../components/i18n";
import translate from "../components/i18n/translate";

export default function AdminRoomConfig({locale}){
    return(
        <I18Provider locale={locale}>
            <>
                <h1>{translate('config-rooms')}</h1>
                <RoomConfiguration locale={locale}/>
                <div className={'button-position'}>
                    <Link to={'/admin/config'}>
                        <button className={'button'}>{translate('back-button')}</button>
                    </Link>
                </div>

            </>
        </I18Provider>
    );
}