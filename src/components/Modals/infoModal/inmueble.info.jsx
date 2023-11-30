import { useSelector } from "react-redux"

export function InmuebleInfo() {
    const user = useSelector(state => state.modal.data)
    return(
        <>
        <h1>Tipo de propiedad: {user.tipoPropiedad}</h1>
        
        </>
    )
    
}