import React from "react";
import './AdminPage.css';
import {Link} from "react-router-dom";
import {Icon} from "../components/icons/styles/icons";
import {BsFillHouseFill, FaSwatchbook} from "react-icons/all";
import {I18Provider} from "../components/i18n";
import translate from "../components/i18n/translate";

export default function AdminPage({locale}){
    return(
        <I18Provider locale={locale}>
            <>
                <h1>{translate('admin-page-header')}</h1>
                <div className={"page-container"}>
                    <div className={"wrapper"}>
                        <ul className={"button-columns"}>
                            <li className={"container"}>
                                <div className={"column-item"}>
                                    <BsFillHouseFill className={"config-logo"}/>
                                    <Link to={'/admin/config/rooms'}>
                                        <button
                                            className={'button'}
                                        >
                                            {translate('config-rooms')}
                                        </button>
                                    </Link>
                                </div>
                            </li>
                            <li className={"container"}>
                                <div className={"column-item"}>
                                    <FaSwatchbook className={"config-logo"}/>
                                    <Link to={'/admin/config/styles'}>
                                        <button
                                            className={'button'}
                                        >
                                            {translate('config-styles')}
                                        </button>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div >
            </>
        </I18Provider>
    );
}