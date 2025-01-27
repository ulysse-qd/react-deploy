import '../style/Menu.css'
import { useState } from 'react'

function Menu({ gen, setGen }) {
    const range = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className="style-menu" >
            <div>Accueil</div>
            <button className='style-bouton' onClick={() => setIsOpen(!isOpen)} >Génération</button>
            {isOpen && <ul>
                {range.map((num) =>

                    <button key={num} className='style-bouton' onClick={() => setGen(`https://tyradex.app/api/v1/gen/${num}`)} >
                        Génération {num}
                    </button>)}

            </ul>}

            <div>Alphabet</div>
        </div>

    )
}

export default Menu

