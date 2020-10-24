import React, {useEffect, useState} from "react";
import Carousel from "../components/carousel/Carousel";

export default function Main(){
    const [ response, setResponse ] = useState('PLACEHOLDER');

    useEffect(() => { //conditie de a nu repeta randarea
        (async () => fetch('/appointments')
            .then(httpResponse => httpResponse.json())
            .then(text => setResponse(text)))();
    }, []); //astea sunt conditiile pt a nu se repeta

    console.log(response);

    console.log(`Load`);

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

            <Carousel/>

        </div>
    )
}