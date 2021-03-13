import React, {useEffect, useState} from "react";
import Carousel from "../components/carousel/Carousel";
import { fetchForm } from "../utils/apiClient";

export default function Main({locale}){
    const [ response, setResponse ] = useState('PLACEHOLDER');

    useEffect(() => { //conditie de a nu repeta randarea
        (async () => fetchForm()
            .then(text => setResponse(text)))();
    }, []); //astea sunt conditiile pt a nu se repeta

    console.log(response);

    return (
        <div>
            {/* {
                Array.isArray(response) ?
                    response.map( (element) => {
                        return (
                            <div>
                                <p className={"legend"}>
                                    {element.first_name},
                                    {element.last_name}
                                </p>
                            </div>
                        )
                    }) : `` //else leave empty
            }
            */}

            <Carousel locale={locale}/>

        </div>
    )
}