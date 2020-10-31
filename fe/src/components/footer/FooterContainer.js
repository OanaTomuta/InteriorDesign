import React from "react";
import Footer from "./Footer";
import {Icon} from "../icons/styles/icons";

export function FooterContainer(){

    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link href="#"><Icon className={"far fa-envelope"}/>InHouse@gmail.com</Footer.Link>
                        <Footer.Link href="#"><Icon className={"fas fa-phone"}/>+40747092211</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="#"><Icon className={"fab fa-instagram"}/>Instagram</Footer.Link>
                        <Footer.Link href="#"><Icon className={"fab fa-facebook-square"}/>Facebook</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Administration</Footer.Title>
                        <Footer.Link><Icon className={"fab fa-instagram"}/>Admin Login</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    );
}