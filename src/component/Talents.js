function Talents({ talent }) {

    return (

        <div className="talent">
            <h2>Talents</h2>
            <div>
                Talent n°1 : {talent[0].name}
            </div>

            {talent.length > 1 &&
                <div className="talent-name">
                    Talent n°2 : {talent[1].name} {talent[1].tc === true &&
                        <div className="talent-cache">*talent caché</div>}
                </div>}

            {talent.length > 2 &&
                <div className="talent-name">
                    Talent n°3 : {talent[2].name} {talent[2].tc === true &&
                        <div className="talent-cache">*talent caché</div>}
                </div>}

        </div>)

}
export default Talents

