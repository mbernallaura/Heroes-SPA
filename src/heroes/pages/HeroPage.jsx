import { Navigate, useParams } from "react-router-dom";
import { getHeroByid } from "../helpers";


export const HeroPage = () => {
    const { id } = useParams();
    const hero = getHeroByid( id );
    if(!hero){
        return <Navigate to={"/marvel"}/>
    }

    return (
        <h1>HeroPage</h1>
    )
}
