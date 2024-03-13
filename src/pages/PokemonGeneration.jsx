import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

function PokemonGeneration() {

    const pokemon = useLoaderData();


    return (

        <section className="pokemon-generation">
            {pokemon.map((pokemonMap) => (
                <Link key={pokemonMap.pokedex_id} to={`/pokemon/${pokemonMap.pokedex_id}`}>
                    <PokemonCard pokemon={pokemonMap} />
                </Link>
            ))}
        </section >

    )
}


export default PokemonGeneration;