import { Link, NavLink } from "react-router-dom";
const CharacterByHero = ({alter_ego, characters})=>{
    // if(alter_ego === characters) return (<></>);
    // return <p>{ characters }</p>
    return (alter_ego === characters) 
    ? <></>
    : <p>{ characters }</p>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const heroImgUrl = `../src/assets/heroes/${id}.jpg`;
    //const characterByHero = (<p>{ characters }</p>);


    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src= { heroImgUrl } className="card-img" alt={ superhero }/>
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>
                            {/* {
                                (alter_ego !== characters) && characterByHero
                                (alter_ego !== characters) && <p>{ characters }</p>
                            } */}
                            <CharacterByHero characters={ characters } alter_ego ={ alter_ego }/>
                            
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>
                            <NavLink to={ `/hero/${ id }` }>Más..</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
