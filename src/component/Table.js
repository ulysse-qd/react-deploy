function Table({ statistique }) {
    const { hp, atk, def, spe_atk, spe_def, vit } = statistique

    const stats = [
        { name: 'HP', value: hp },
        { name: 'Attaque', value: atk },
        { name: 'Défense', value: def },
        { name: 'Attaque Spéciale', value: spe_atk },
        { name: 'Défense Spéciale', value: spe_def },
        { name: 'Vitesse', value: vit },
    ]

    return (
        <div>
            <h2>Statistiques de base</h2>
            <table className="table-stats">
                <tbody>
                    {stats.map((stat) => (
                        <tr key={stat.name}>
                            <td className="category">{stat.name}</td>
                            <td className="valeur-category">{stat.value}</td>
                            <td className="range-slide">
                                <div
                                    className="range-slide-fill"
                                    style={{
                                        width: `calc(100% * ${stat.value} / 255)`,
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table
