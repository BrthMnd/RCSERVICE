import { TextSpecial } from "../TextSpecials/textSpecial.component";

export default function OfertaEstadoInfo ({todo}){

    return(
        <>
        <TextSpecial name={'Nombre:'} value={todo.name} />
        <TextSpecial name={'Descripción:'} value={todo.description} />
        <TextSpecial name={'Estado:'} value={todo.estado?'Activo':'Inactivo'} />

        </>

    )
}
// name: items.name,
//           description: items.description,
//           estado: items.estado,