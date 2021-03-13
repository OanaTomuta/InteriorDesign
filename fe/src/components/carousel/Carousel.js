import './Carousel.css';
import React from "react";
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import {Button} from "../button/Button";
import { I18Provider, LANGUAGES } from "../i18n";
import { FormattedMessage } from "react-intl";
import translate from "../i18n/translate";

export default function CarouselComponent({locale}){

    return(
        <I18Provider locale={locale}>
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
                { /*<FormattedMessage id={"Make an Appointment"}/> */}
                <h1 className={"header"}>
                    {translate('main-header-message')}
                </h1>

                <Button
                    className={'btn'}
                    buttonSize={'btn--large'}
                >
                    {translate('Make an Appointment')}
                </Button>
            </div>
        </I18Provider>
    );
}