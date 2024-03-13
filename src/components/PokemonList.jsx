import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import "./pokemon.css"

function PokemonList() {



    const [archives, setArchives] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const categoriesPerPage = 9;
    const paginationPerPage = 10; // Nombre de boutons de pagination à afficher

    useEffect(() => {
        fetch("https://tyradex.vercel.app/api/v1/pokemon")
            .then((res) => res.json())
            .then((data) => {
                setArchives(data)
                console.info(data)
            })
    }, []);

    // Index de la première et de la dernière catégorie à afficher sur la page actuelle
    const indexOfLastCategory = currentPage * categoriesPerPage;
    const indexOfirstCategory = indexOfLastCategory - categoriesPerPage;
    const currentCategories = archives.slice(indexOfirstCategory, indexOfLastCategory)

    // Fonction pour changer de page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Générer les boutons de pagination
    const paginationButtons = [];
    for (let i = 1; i <= Math.ceil(archives.length / categoriesPerPage); i++) {
        if (i % paginationPerPage === 1 || i === 1) {
            paginationButtons.push(
                <div key={i} className="pagination-button">
                    <button className="button-pokemon" onClick={() => paginate(i)}>{i}</button>
                </div>
            );
        }

    }

    // Formatage des types
    const formatTypes = (pokemon) => {
        // Vérifiez si pokemon.types est un tableau d'objets
        if (Array.isArray(pokemon.types) && pokemon.types.length > 0 && typeof pokemon.types[0] === "object") {
            return pokemon.types.map(type => type.name);
        }
        // Si types est déjà un tableau de chaînes, retournez-le tel quel
        return pokemon.types;
    };


    return (

        <section>
            <div className="pokemon-list">
                {currentCategories.map((pokemonMap) => (
                    <Link key={pokemonMap.pokedex_id} to={`/pokemon/${pokemonMap.pokedex_id}`}>
                        <PokemonCard pokemon={{ ...pokemonMap, types: formatTypes(pokemonMap) }} />
                    </Link>
                ))}
                {/* Pagination */}

                <div className="pagination-list">{paginationButtons}</div>
            </div>
        </section>

    )
}

export default PokemonList;