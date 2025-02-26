import Header from './Header'
import Pokedex from './Pokedex'
import Menu from './Menu'
import { useState } from 'react'

function App() {
    const [gen, setGen] = useState('')

    return (
        <div>
            <Header />
            <div className="app-style">
                <div>
                    <Menu setGen={setGen} />
                </div>
                <div>
                    <Pokedex gen={gen} />
                </div>
            </div>
        </div>
    )
}

export default App
