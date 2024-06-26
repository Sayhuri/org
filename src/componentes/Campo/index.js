import "./Campo.css";

const Campo = (props) => {
    const placeHolderModificado = `${props.placeholder}...`
    
    //Destructuracion
    const { type = "text" } = props

    const manejarcambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input 
                placeholder={placeHolderModificado}
                required={props.required}
                value={props.valor}
                onChange={manejarcambio}
                type={type}
            />
        </div>
}

export default Campo