import '../style/Pokedex.css'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { typesPoke } from '../data/typespoke'
import Talents from './Talents'
import Table from './Table'
import Apropos, { TypesDiv } from './Apropos'

const IdentifiantMapping = {
    Plante: '#78C850',
    Eau: '#6890F0',
    Feu: '#F08030',
    Poison: '#A040A0',
    Normal: '#A8A878',
    Combat: '#C03028',
    Électrik: '#F8D030',
    Psy: '#F85888',
    Insecte: '#A8B820',
    Acier: '#B8B8D0',
    Fée: ' #EE99AC',
    Ténèbres: '#705848',
    Dragon: '#7038F8',
    Glace: '#98D8D8',
    Vol: '#A890F0',
    Sol: '#E0C068',
    Roche: '#B8A038',
    Spectre: '#705898',
    default: 'white',
}

const IdentifiantDiv = styled.div`
    background-color: ${(props) =>
        IdentifiantMapping[props.types] ?? IdentifiantMapping.default};
`

//Lance la fonction pokedex permettant l'affichage en fonction de l'API choisis grâce au menu

function Pokedex({ gen }) {
    const [listPoke, setListPoke] = useState([])
    const [isPopup, setIsPopup] = useState(false)
    const [selectedPokemon, setSelectedPokemon] = useState('')
    const [activeTypes, setActiveTypes] = useState('')

    useEffect(() => {
        const getData = async () => {
            const url = gen

            try {
                const resp = await fetch(url)
                const data = await resp.json()
                setListPoke(data)
            } catch (err) {
                console.log(err)
            }
        }

        getData()
    }, [gen])

    const togglePopup = (pokemonId) => {
        setIsPopup(!isPopup)
        setSelectedPokemon(pokemonId)
    }

    return (
        <div className="all">
            {gen && (
                <div className="filtre">
                    <select
                        value={activeTypes}
                        onChange={(e) => setActiveTypes(e.target.value)}
                        className="select"
                    >
                        <option value={''}>Types à filtrer</option>
                        {typesPoke.map((cat) => (
                            <option key={cat} value={cat}>
                                {' '}
                                {cat}{' '}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={() => setActiveTypes('')}
                        className="select"
                    >
                        Réinitialiser
                    </button>
                </div>
            )}

            <ul className="imj-pokedex">
                {listPoke?.map(
                    (pokemon) =>
                        (!activeTypes ||
                            activeTypes === pokemon.types[0].name) && (
                            <div>
                                <div className="bloc-pokedex">
                                    <TypesDiv
                                        types={pokemon.types[0].name}
                                        key={pokemon.pokedex_id}
                                        className="imj-carte"
                                        onClick={() =>
                                            togglePopup(pokemon.pokedex_id)
                                        }
                                    >
                                        <IdentifiantDiv
                                            types={
                                                pokemon.types.length > 1
                                                    ? pokemon.types[1].name
                                                    : pokemon.types[0].name
                                            }
                                            className="imj-number"
                                        >
                                            N° {pokemon.pokedex_id}
                                        </IdentifiantDiv>
                                        <IdentifiantDiv
                                            types={pokemon.types[0].name}
                                            className="imj-name"
                                        >
                                            {' '}
                                            {pokemon.name.fr}
                                        </IdentifiantDiv>
                                        <img
                                            src={pokemon.sprites.regular}
                                            alt={pokemon.name.fr}
                                            className="imj-pokemon"
                                        ></img>
                                    </TypesDiv>
                                </div>

                                {/* Popup */}
                                {isPopup &&
                                    pokemon.pokedex_id === selectedPokemon && (
                                        <div className="popup-container">
                                            <div className="popup">
                                                <Apropos pokemon={pokemon} />
                                                <div>
                                                    <Table
                                                        statistique={
                                                            pokemon.stats
                                                        }
                                                    />
                                                    <Talents
                                                        talent={pokemon.talents}
                                                    />
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        setIsPopup(false)
                                                    }
                                                    className="close-button"
                                                >
                                                    x
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setSelectedPokemon(
                                                            pokemon.pokedex_id +
                                                                1,
                                                        )
                                                    }
                                                    className="next-button"
                                                >
                                                    {' '}
                                                    {'>'}{' '}
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setSelectedPokemon(
                                                            pokemon.pokedex_id -
                                                                1,
                                                        )
                                                    }
                                                    className="previous-button"
                                                >
                                                    {'<'}{' '}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        ),
                )}
            </ul>
        </div>
    )
}

export default Pokedex
