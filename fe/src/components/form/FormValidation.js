import React from 'react';

export default function validateInfo(values){

    let errors = {};

    if(!values.firstName.trim()){
       errors.firstName = 'First Name required!';
    }

    if(!values.lastName.trim()){
        errors.lastName = 'Last Name required!';
    }

    if(!values.email){
        errors.email = 'Email Address required!';
    }
    else if (!/\S+@\S+\.\S+/.test(values.email))
    {
        errors.email = 'Email Address is invalid!';
    }

    if(!values.phone.trim()){
        errors.phone = 'Phone Number required!';
    }
    else if(values.phone.length !== 10)
    {
        errors.phone = 'Phone Number is invalid!';
    }

    return errors;
}