export const Planet = (prop) =>{
    return(
        <h1>
            {prop.isGasPlanet && <h1>{prop.name}</h1>}
        </h1>
    );
}
