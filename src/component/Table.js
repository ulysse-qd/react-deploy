function Table({ statistique }) {
    return (<div>
        <h2>Statistiques de base</h2>
        <table className="table-stats">

            <tbody>
                <tr>
                    <td className="category">HP</td>
                    <td className="valeur-category">{statistique.hp}</td>
                    <td className="range-slide"><div className="range-slide-fill" style={{ width: `calc(100% * ${statistique.hp} / 255)` }}></div></td>
                </tr>
                <tr>
                    <td className="category">Attaque</td>
                    <td className="valeur-category">{statistique.atk}</td>
                    <td className="range-slide"><div className="range-slide-fill" style={{ width: `calc(100% * ${statistique.atk} / 255)` }}></div></td>
                </tr>
                <tr>
                    <td className="category">Défense</td>
                    <td className="valeur-category">{statistique.def}</td>
                    <td className="range-slide"><div className="range-slide-fill" style={{ width: `calc(100% * ${statistique.def} / 255)` }}></div></td>
                </tr>
                <tr>
                    <td className="category">Attaque Spéciale</td>
                    <td className="valeur-category">{statistique.spe_atk}</td>
                    <td className="range-slide"><div className="range-slide-fill" style={{ width: `calc(100% * ${statistique.spe_atk} / 255)` }}></div></td>
                </tr>
                <tr>
                    <td className="category">Défense Spéciale</td>
                    <td className="valeur-category">{statistique.spe_def}</td>
                    <td className="range-slide"><div className="range-slide-fill" style={{ width: `calc(100% * ${statistique.spe_def} / 255)` }} ></div></td>
                </tr>
                <tr>
                    <td className="category">Vitesse</td>
                    <td className="valeur-category">{statistique.vit}</td>
                    <td className="range-slide"><div className="range-slide-fill" style={{ width: `calc(100% * ${statistique.vit} / 255)` }}></div></td>
                </tr>
            </tbody>

        </table>
    </div>
    )

}
export default Table