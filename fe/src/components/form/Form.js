import React, {useEffect, useState} from 'react';
import useForm from "./UseForm";
import './Form.css';
import validate from "./FormValidation";
import {I18Provider} from "../i18n";
import translate from "../i18n/translate";

const Form = ({submitForm, payload,locale}) => {

    const{ handleChange, handleRequestButton, values, errors, setValues } = useForm(submitForm, validate);

    useEffect(() => {
        setValues(Object.assign({}, values, { preferences: payload }))
    }, [ payload ]);

    return(
        <I18Provider locale={locale}>
            <div >
                <form className={'form'} onSubmit={handleRequestButton}>
                    <h1>{translate('form-header')}</h1>
                    {/* First Name field*/}
                    <div className={'form-inputs'}>
                        <label
                            htmlFor={'firstName'}
                            className={'form-label'}
                        >
                            {translate('form-first-name')}
                        </label>
                        <input
                            id={'firstName'}
                            type={'text'}
                            name={'firstName'}
                            className={'form-inputs'}
                            placeholder={'Enter your First Name'}
                            value={values.firstName}
                            onChange={handleChange}
                        />
                        {errors.firstName && <p>{errors.firstName}</p>}
                    </div>
                    {/* Last Name field*/}
                    <div className={'form-inputs'}>
                        <label
                            htmlFor={'lastName'}  //links id to this
                            className={'form-label'}
                        >
                            {translate('form-last-name')}
                        </label>
                        <input
                            id={'lastName'}
                            type={'text'}
                            name={'lastName'}
                            className={'form-inputs'}
                            placeholder={'Enter your Last Name'}
                            value={values.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                    {/* Email field*/}
                    <div className={'form-inputs'}>
                        <label
                            htmlFor={'email'}
                            className={'form-label'}
                        >
                            Email
                        </label>
                        <input
                            id={'email'}
                            type={'email'}
                            name={'email'}
                            className={'form-inputs'}
                            placeholder={'Enter your Email Address'}
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className={'form-inputs'}>
                        <label
                            htmlFor={'phone'}
                            className={'form-label'}
                        >
                            {translate('form-phone')}
                        </label>
                        <input
                            id={'phone'}
                            type={'phone number'}
                            name={'phone'}
                            value={values.phone}
                            onChange={handleChange}
                            className={'form-inputs'}
                            placeholder={'Enter your Phone Number'}
                        />
                        {errors.phone && <p>{errors.phone}</p>}
                    </div>
                    <button
                        className={'form-input-btn-finish'}
                        type={'submit'}

                    >
                        {translate('request-button')}
                    </button>
                </form>
            </div>
        </I18Provider>
    );
}

export default Form;