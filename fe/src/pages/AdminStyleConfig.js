import React from "react";
import StyleConfiguration from "../components/admin/StyleConfiguration";
import {Link} from "react-router-dom";
import "./AdminStyleConfig.css"
import translate from "../components/i18n/translate";
import {I18Provider} from "../components/i18n";

export default function AdminStyleConfig({locale}){
    return(
        <I18Provider locale={locale}>
            <>
                <h1>{translate('config-styles')}</h1>
                <StyleConfiguration locale={locale}/>
                <div className={'button-position'}>
                    <Link to={'/admin/config'}>
                        <button className={'button'}>{translate('back-button')}</button>
                    </Link>
                </div>

            </>
        </I18Provider>
    );
}