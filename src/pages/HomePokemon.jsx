import { useLoaderData } from "react-router-dom";
import PokemonList from "../components/PokemonList";

function HomePokemon() {
    
    const { pokemon } = useLoaderData();

    return (
        <>
        <PokemonList pokemon={pokemon} />
        </>
    )
}

export default HomePokemon;