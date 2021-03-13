import React, {useEffect, useState} from 'react';
import useForm from "./LoginUseForm";
import './LoginForm.css';
import validate from "./LoginFormValidation";
import {I18Provider} from "../i18n";
import translate from "../i18n/translate";

const LoginForm = ({submitForm, locale}) => {

    const{ handleChange, handleLoginButton, values, errors } = useForm(submitForm, validate);


    return(
        <I18Provider locale={locale}>
            <div className={"form-container"}>
                <form className={'login-form'} onSubmit={handleLoginButton}>
                    <h1>{translate('admin-login-header')}</h1>
                    {/* Username field */}
                    <div className={'form-inputs'}>
                        <label
                            htmlFor={'username'}
                            className={'form-label'}
                        >
                            {translate('username')}
                        </label>
                        <input
                            id={'username'}
                            type={'text'}
                            name={'username'}
                            className={'form-inputs'}
                            placeholder={'Enter Admin username'}
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                    </div>
                    {/* Password field */}
                    <div className={'form-inputs'}>
                        <label
                            htmlFor={'password'}
                            className={'form-label'}
                        >
                            {translate('password')}
                        </label>
                        <input
                            id={'password'}
                            type={'password'}
                            name={'password'}
                            value={values.phone}
                            onChange={handleChange}
                            className={'form-inputs'}
                            placeholder={'Enter Admin password'}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <button
                        className={'form-input-btn-finish'}
                        type={'submit'}
                    >
                        {translate('log-in')}
                    </button>
                </form>
            </div>
        </I18Provider>
    );
}

export default LoginForm;