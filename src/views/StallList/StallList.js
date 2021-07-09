import { useEffect } from "react";
import { useParams } from "react-router-dom";

/**
 * The viewpage that contains the list of stalls per given location
 */
export default function StallList(props) {

    const { LocationID } = useParams();

    useEffect( () => {
        fetch(`https://functional-expressionism-api.herokuapp.com/locations/${LocationID}/menu`)
    });

    return (
        <p> hello </p>
    )


}