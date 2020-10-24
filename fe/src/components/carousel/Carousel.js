import './Carousel.css';
import React from "react";
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import {Button} from "../button/Button";


export default function CarouselComponent(){

    return(
        <div className={"container"}>

            <div className={"carousel-slider"}>
                <Carousel
                    autoPlay
                    infiniteLoop={true}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    showArrows={false}
                >

                    <div>
                        <img
                            className={"slide-image"}
                            src={"/carousel-images/int1.jpg"}
                            alt={""}
                        />
                    </div>

                    <div>
                        <img
                            className={"slide-image"}
                            src={"/carousel-images/int2.jpg"}
                            alt={""}
                        />
                    </div>
                </Carousel>
            </div>
            <h1 className={"header"}>
                Welcome to InHouse Interior Design!
            </h1>
            <Button
                className={'btn'}
                buttonSize={'btn--large'}
            >
                Make an Appointment
            </Button>
        </div>
    );
}