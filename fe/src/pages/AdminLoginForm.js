import React, {useState} from 'react';
import LoginForm from "../components/login/LoginForm";
import AdminPage from "./AdminPage";


const AdminLoginForm = ({locale}) => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false)

    function submitForm(){
        setIsSubmitted(true);
        //setLoggedIn(true);
    }

   /* function adminLoggedIn(){

        if( loggedIn === false){
            setLoggedIn(true);
        }else{
            setLoggedIn(false)
        }
    }*/

    //console.log(preferences)
    return(
        <>
            <div>
                {/* <span className={"close-btn"}>x</span>*/}
                {/*} <div className='form-content-left'>
                <img className='form-img' src='/rooms-page-images/bedroom.jpg' alt='spaceship' />
            </div>*/}

                {!loggedIn ? (!isSubmitted ? (<LoginForm submitForm={submitForm} locale={locale}/>) :
                    (<AdminPage locale={locale} />)) : <AdminPage locale={locale}/>}

            </div>

        </>
    );
}

export default AdminLoginForm;