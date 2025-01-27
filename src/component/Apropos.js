import styled from "styled-components"

const TypesDiv = styled.div`
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
                                                                                : 'white'}`

function Apropos({ pokemon }) {

    return (
        <div className="about">
            {`${pokemon.name.fr[0]}` === "A" || `${pokemon.name.fr[0]}` === "E" || `${pokemon.name.fr[0]}` === "I"
                || `${pokemon.name.fr[0]}` === "O" || `${pokemon.name.fr[0]}` === "U" || `${pokemon.name.fr[0]}` === "Y" || `${pokemon.name.fr[0]}` === "É"
                ? <h2>À propos d' {pokemon.name.fr} </h2> : <h2>À propos de {pokemon.name.fr} </h2>}

            <div className="typespoke">
                <p>Type n°1 : </p>
                <div className="bloc-type">
                    <img src={pokemon.types[0].image} alt="type-1" className="imj-types" />
                    <TypesDiv types={pokemon.types[0].name} className="name-type">{pokemon.types[0].name} </TypesDiv>
                </div>
            </div>
            <div>

                <div className="typespoke">
                    <p>Type n°2 : </p>
                    {pokemon.types.length > 1 ?
                        <div className="bloc-type">

                            <img src={pokemon.types[1].image} alt="" className="imj-types" />
                            <TypesDiv types={pokemon.types.length > 1 ? pokemon.types[1].name : pokemon.types[0].name} className="name-type">{pokemon.types[1].name}</TypesDiv>
                        </div>
                        :
                        <div>N/A</div>}
                </div>
            </div>
            <div>Poids : {pokemon.weight}</div>
            <div>Taille : {pokemon.height}</div>
            <div>
                <img src={`https://projectpokemon.org/images/normal-sprite/${((pokemon.name.en).toLowerCase())}.gif`} alt="animated-gif" className="gif-pokemon" />
            </div>
        </div>
    )
}

export default Apropos