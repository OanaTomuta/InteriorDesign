import { CgCollage } from 'react-icons/cg'
import './Navbar.css';
import React, {useState} from "react";
import { Link } from "react-router-dom";
import {I18Provider, LANGUAGES} from "../i18n";
import translate from "../i18n/translate";
const {Component} = require("react");


export default function Navbar({locale, setLocale}){

        return(
            <I18Provider locale={locale}>
                <div className={"navbar"}>
                    <div className={"navbar-container"}>
                        <Link to='/' className={"navbar-logo"}>
                            <CgCollage className={"navbar-icon"}/>
                                InHouse
                        </Link>

                            <button
                                className={"language-button"}
                                onClick={() => setLocale(LANGUAGES.ENGLISH)}
                            >
                                {translate('en-button')}
                            </button>
                            <button
                                className={"language-button"}
                                onClick={() => setLocale(LANGUAGES.ROMANIAN)}
                            >
                                {translate('ro-button')}
                            </button>

                    </div>
                </div>
            </I18Provider>
        );

}
