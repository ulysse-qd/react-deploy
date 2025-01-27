import "../style/Pokedex.css"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { typesPoke } from "../data/typespoke"
import Talents from "./Talents"
import Table from "./Table"
import Apropos from "./Apropos"


const IdentifiantDiv = styled.div`

background-color: ${props =>
        props.types === 'Plante' ? '#78C850'
            : props.types === 'Eau' ? '#6890F0'
                : props.types === 'Feu' ? '#F08030'
                    : props.types === 'Poison' ? '#A040A0'
                        : props.types === 'Normal' ? '#A8A878'
                            : props.types === 'Combat' ? '#C03028'
                                : props.types === '\u00c9lectrik' ? '#F8D030'
                                    : props.types === 'Psy' ? '#F85888'
                                        : props.types === 'Insecte' ? '#A8B820'
                                            : props.types === 'Acier' ? '#B8B8D0'
                                                : props.types === 'F\u00e9e' ? ' #EE99AC'
                                                    : props.types === 'T\u00e9n\u00e8bres' ? '#705848'
                                                        : props.types === 'Dragon' ? '#7038F8'
                                                            : props.types === 'Glace' ? '#98D8D8'
                                                                : props.types === 'Vol' ? '#A890F0'
                                                                    : props.types === 'Sol' ? '#E0C068'
                                                                        : props.types === 'Roche' ? '#B8A038'
                                                                            : props.types === 'Spectre' ? '#705898'
                                                                                : 'white'}
    `
const StyleDiv = styled.div`
    background-color: ${props =>
        props.types === 'Plante' ? 'rgba(120, 200, 80, 0.4)'
            : props.types === 'Eau' ? 'rgba(104, 144, 240, 0.4)'
                : props.types === 'Feu' ? 'rgba(240, 128, 48, 0.4)'
                    : props.types === 'Poison' ? 'rgba(160, 64, 160,0.4)'
                        : props.types === 'Normal' ? 'rgba(168, 168, 120, 0.4)'
                            : props.types === 'Combat' ? 'rgba(192, 48, 40, 0.4)'
                                : props.types === '\u00c9lectrik' ? 'rgba(248, 208, 48, 0.4)'
                                    : props.types === 'Psy' ? 'rgba(248, 88, 136, 0.4)'
                                        : props.types === 'Insecte' ? 'rgba(168, 184, 32, 0.4)'
                                            : props.types === 'Acier' ? 'rgba(184, 184, 208, 0.4)'
                                                : props.types === 'F\u00e9e' ? 'rgba(238, 153, 172, 0.4)'
                                                    : props.types === 'T\u00e9n\u00e8bres' ? 'rgba(112, 88, 72, 0.4)'
                                                        : props.types === 'Dragon' ? 'rgba(112, 56, 248, 0.4)'
                                                            : props.types === 'Glace' ? 'rgba(152, 216, 216, 0.4)'
                                                                : props.types === 'Vol' ? 'rgba(168, 144, 240, 0.4)'
                                                                    : props.types === 'Sol' ? 'rgba(224, 192, 104, 0.4)'
                                                                        : props.types === 'Roche' ? 'rgba(184, 160, 56, 0.4)'
                                                                            : props.types === 'Spectre' ? 'rgba(112, 88, 152, 0.4)'
                                                                                : 'white'}
                                                                                        `




//Lance la fonction pokedex permettant l'affichage en fonction de l'API choisis grâce au menu

function Pokedex({ gen, setGen }) {


    const [listPoke, setListPoke] = useState([])
    const [isPopup, setIsPopup] = useState(false)
    const [selectedPokemon, setSelectedPokemon] = useState('')
    const [activeTypes, setActiveTypes] = useState('')



    useEffect(() => {
        const getData = async () => {
            const url = gen;

            try {
                const resp = await fetch(url);
                const data = await resp.json();
                setListPoke(data);
            } catch (err) {
                console.log(err);
            }
        }

        getData();
    }, [gen])


    const togglePopup = (pokemonId) => { setIsPopup(!isPopup); setSelectedPokemon(pokemonId) }


    return (


        <div className="all">
            {gen &&
                <div className="filtre">
                    <select
                        value={activeTypes}
                        onChange={(e) => setActiveTypes(e.target.value)}
                        className="select">

                        <option value={''}>Types à filtrer</option>

                        {typesPoke.map((cat => (
                            <option key={cat} value={cat} > {cat} </option>)))}

                    </select>
                    <button onClick={() => setActiveTypes('')} className="select">Réinitialiser</button>
                </div>}


            <ul className="imj-pokedex" >
                {listPoke && listPoke.map((pokemon) => !activeTypes || activeTypes === pokemon.types[0].name || !activeTypes || activeTypes === (pokemon.types.length > 1 && pokemon.types[1].name) ? (
                    <div>
                        <div className="bloc-pokedex">
                            <StyleDiv types={pokemon.types[0].name} key={pokemon.pokedex_id} className="imj-carte" onClick={() => togglePopup(pokemon.pokedex_id)} >

                                <IdentifiantDiv types={pokemon.types.length > 1 ? pokemon.types[1].name : pokemon.types[0].name} className="imj-number">N° {pokemon.pokedex_id}</IdentifiantDiv>
                                <IdentifiantDiv types={pokemon.types[0].name} className="imj-name"> {pokemon.name.fr}</IdentifiantDiv>
                                <img src={pokemon.sprites.regular} alt={pokemon.name.fr} className="imj-pokemon" ></img>

                            </StyleDiv>
                        </div>


                        {/* Popup */}
                        {isPopup && pokemon.pokedex_id === selectedPokemon &&
                            <div className="popup-container" >
                                <div className="popup">
                                    <Apropos pokemon={pokemon} />
                                    <div>
                                        <Table
                                            statistique={pokemon.stats} />
                                        <Talents
                                            talent={pokemon.talents} />
                                    </div>
                                    <button onClick={() => setIsPopup(false)} className="close-button">x</button>
                                    <button onClick={() => setSelectedPokemon(pokemon.pokedex_id + 1)} className="next-button"> {'>'} </button>
                                    <button onClick={() => setSelectedPokemon(pokemon.pokedex_id - 1)} className="previous-button">{'<'} </button>

                                </div>
                            </div>}

                    </div>
                ) : null)
                }

            </ul >



        </div >
    )
}


export default Pokedex