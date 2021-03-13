import React from "react";
import Footer from "./Footer";
import {Icon} from "../icons/styles/icons";
import {I18Provider} from "../i18n";
import translate from "../i18n/translate";

export function FooterContainer({locale}){

    return(
        <I18Provider locale={locale}>
            <Footer>
                <Footer.Wrapper>
                    <Footer.Row>
                        <Footer.Column>
                            <Footer.Title>{translate('about-us')}</Footer.Title>
                            <Footer.Link href="#">Story</Footer.Link>
                        </Footer.Column>
                        <Footer.Column>
                            <Footer.Title>{translate('contact-us')}</Footer.Title>
                            <Footer.Link href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhbqXVRkgSBgbmkpNRmSxgcWcmSlDfGGmdsNMcMmlKbDxlRdcnBDszjKgcbMzCDfnvkgKr"><Icon className={"far fa-envelope"}/>InHouse@gmail.com</Footer.Link>
                            <Footer.Link href="#"><Icon className={"fas fa-phone"}/>+40747092211</Footer.Link>
                        </Footer.Column>
                        <Footer.Column>
                            <Footer.Title>{translate('social')}</Footer.Title>
                            <Footer.Link href="https://www.instagram.com/"><Icon className={"fab fa-instagram"}/>Instagram</Footer.Link>
                            <Footer.Link href="https://www.facebook.com/"><Icon className={"fab fa-facebook-square"}/>Facebook</Footer.Link>
                        </Footer.Column>
                        {/*<Footer.Column>
                            <Footer.Title>Administration</Footer.Title>
                            <Footer.Link><Icon className={"fab fa-instagram"}/>Admin Login</Footer.Link>
                        </Footer.Column>*/}
                    </Footer.Row>
                </Footer.Wrapper>
            </Footer>
        </I18Provider>
    );
}