import React from 'react';

export default function validateInfo(values){

    let errors = {};

    if(!values.username.trim()){
        errors.username = 'Username Required!';
    }

    if(!values.password.trim()){
        errors.password = 'Password required!';
    }

    return errors;
}