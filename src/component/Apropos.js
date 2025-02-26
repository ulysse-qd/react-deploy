import styled from 'styled-components'

export const backgroundMapping = {
    Plante: 'rgba(120, 200, 80, 0.4)',
    Eau: 'rgba(104, 144, 240, 0.4)',
    Feu: 'rgba(240, 128, 48, 0.4)',
    Poison: 'rgba(160, 64, 160,0.4)',
    Normal: 'rgba(168, 168, 120, 0.4)',
    Combat: 'rgba(192, 48, 40, 0.4)',
    Électrik: 'rgba(248, 208, 48, 0.4)',
    Psy: 'rgba(248, 88, 136, 0.4)',
    Insecte: 'rgba(168, 184, 32, 0.4)',
    Acier: 'rgba(184, 184, 208, 0.4)',
    Fée: 'rgba(238, 153, 172, 0.4)',
    Ténèbres: 'rgba(112, 88, 72, 0.4)',
    Dragon: 'rgba(112, 56, 248, 0.4)',
    Glace: 'rgba(152, 216, 216, 0.4)',
    Vol: 'rgba(168, 144, 240, 0.4)',
    Sol: 'rgba(224, 192, 104, 0.4)',
    Roche: 'rgba(184, 160, 56, 0.4)',
    Spectre: 'rgba(112, 88, 152, 0.4)',
    default: 'white',
}

export const TypesDiv = styled.div`
    background-color: ${(props) =>
        backgroundMapping[props.types] ?? backgroundMapping.default};
`

const isVowel = (letter) => {
    if (['A', 'E', 'I', 'O', 'U', 'Y', 'É'].includes(letter)) {
        return "d'"
    }
    return 'de'
}

function Apropos({ pokemon }) {
    return (
        <div className="about">
            <h2>
                À propos {isVowel(pokemon.name.fr[0])} {pokemon.name.fr}
            </h2>

            <div className="typespoke">
                <p>Type n°1 : </p>
                <div className="bloc-type">
                    <img
                        src={pokemon.types[0].image}
                        alt="type-1"
                        className="imj-types"
                    />
                    <TypesDiv
                        types={pokemon.types[0].name}
                        className="name-type"
                    >
                        {pokemon.types[0].name}{' '}
                    </TypesDiv>
                </div>
            </div>
            <div className="typespoke">
                <p>Type n°2 : </p>
                {pokemon.types.length > 1 ? (
                    <div className="bloc-type">
                        <img
                            src={pokemon.types[1].image}
                            alt=""
                            className="imj-types"
                        />
                        <TypesDiv
                            types={pokemon.types[1].name}
                            className="name-type"
                        >
                            {pokemon.types[1].name}
                        </TypesDiv>
                    </div>
                ) : (
                    <div>N/A</div>
                )}
            </div>
            <div>Poids : {pokemon.weight}</div>
            <div>Taille : {pokemon.height}</div>
            <img
                src={`https://projectpokemon.org/images/normal-sprite/${pokemon.name.en.toLowerCase()}.gif`}
                alt="animated-gif"
                className="gif-pokemon"
            />
        </div>
    )
}

export default Apropos
