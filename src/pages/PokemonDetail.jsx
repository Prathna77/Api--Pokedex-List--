import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PokemonDetail() {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        fetch(`https://tyradex.vercel.app/api/v1/pokemon/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data)
                console.info(data)
            })
    }, [id]);

    return (
            <section className="pokemon-detail">
                {pokemon && (
                    <>
                        <p>{pokemon.name.jp}</p>
                        <p>{pokemon.name.fr}</p>
                        <img className="image-shiny" src={pokemon.sprites.shiny} />
                    </>
                )
                }
            </section >
    )
}

export default PokemonDetail;