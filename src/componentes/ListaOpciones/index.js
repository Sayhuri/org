import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    // Metodo map -> arreglo.map((equipo, index) => {
    //    return <option></option>
    // })

    const manejarcambio = (e) => {
        props.setValor(e.target.value)
    }


    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarcambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
                {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
            </select>
        </div>
    )
}

export default ListaOpciones